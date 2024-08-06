### Seek Pagination

Seek pagination is an enhancement of keyset pagination that helps avoid tight coupling between pagination and filtering or sorting mechanisms. This technique uses a unique identifier (`after_id` or `start_id`) to fetch the next set of items, making it highly effective even for large datasets with high cardinality unique identifiers.

#### How Seek Pagination Works

1. **Initial Request**: Fetch the first set of items with a limit.
2. **Subsequent Requests**: Use the unique identifier of the last item from the previous page to fetch the next set of items.

### Example Scenario

Assume you are paginating through a list of items ordered by their creation date in ascending order.

#### Initial Request

The client requests the first 20 items:
```plaintext
GET /items?limit=20
```
This returns the first 20 items.

#### Response Example

```json
[
    {"id": 1, "created": "2021-01-01T00:00:00"},
    {"id": 2, "created": "2021-01-01T01:00:00"},
    ...
    {"id": 20, "created": "2021-01-01T19:00:00"}
]
```

#### Next Page Request

To fetch the next set of items, the client uses the ID of the last item from the previous response:
```plaintext
GET /items?limit=20&after_id=20
```
This fetches the next 20 items where the ID is greater than 20.

### SQL Query Example

The SQL equivalent for the next page request might look like this:
```sql
SELECT *
FROM Items
WHERE Id > 20
ORDER BY Id
LIMIT 20;
```

### Handling Custom Sort Orders

If you need to sort by a different field, such as email, the backend must perform an additional query to find the pivot value:

1. **Find the pivot value (email) for the given ID**:
    ```sql
    SELECT email AS AFTER_EMAIL
    FROM Items
    WHERE Id = 20;
    ```

2. **Fetch the next set of items using the pivot value**:
    ```sql
    SELECT *
    FROM Items
    WHERE Email >= [AFTER_EMAIL]
    ORDER BY Email, Id
    LIMIT 20;
    ```

This ensures that items are sorted by email, and if two emails are the same, they are further sorted by ID to maintain a stable sort order.

### Benefits of Seek Pagination

1. **Decoupling**: No tight coupling between pagination logic and filter logic.
2. **Consistent Ordering**: Maintains consistent ordering even when new items are added to the table.
3. **Consistent Performance**: Performs efficiently even with large datasets.

### Downsides of Seek Pagination

1. **Complex Backend Implementation**: More complex to implement on the backend compared to offset-based or keyset-based pagination.
2. **Handling Deleted Items**: If items are deleted, the `start_id` may not be valid, requiring additional checks or handling.

### Practical Example in Node.js with Express

Here’s how you might implement seek pagination in a Node.js application using Express and a SQL database:

```javascript
const express = require('express');
const app = express();
const { Pool } = require('pg'); // Example using PostgreSQL

const pool = new Pool({
    user: 'yourusername',
    host: 'localhost',
    database: 'yourdatabase',
    password: 'yourpassword',
    port: 5432,
});

app.get('/items', async (req, res) => {
    const limit = parseInt(req.query.limit, 10) || 20;
    const afterId = parseInt(req.query.after_id, 10) || 0;
    const sortBy = req.query.sort_by || 'id';

    let query = 'SELECT * FROM Items ';
    let queryParams = [];

    if (afterId > 0) {
        if (sortBy === 'id') {
            query += 'WHERE Id > $1 ';
            queryParams.push(afterId);
        } else {
            const afterValueQuery = `SELECT ${sortBy} AS AFTER_VALUE FROM Items WHERE Id = $1`;
            const afterValueResult = await pool.query(afterValueQuery, [afterId]);
            const afterValue = afterValueResult.rows[0].after_value;
            query += `WHERE ${sortBy} >= $1 AND Id > $2 `;
            queryParams.push(afterValue, afterId);
        }
    }

    query += `ORDER BY ${sortBy}, Id LIMIT $${queryParams.length + 1}`;
    queryParams.push(limit);

    try {
        const result = await pool.query(query, queryParams);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

### Summary

Seek pagination is an efficient and flexible method for paginating large datasets. By using a unique identifier (`after_id`), it avoids coupling pagination logic to filters and sorting fields. This method ensures consistent performance and ordering but requires more complex backend logic to handle custom sort orders and deleted items.