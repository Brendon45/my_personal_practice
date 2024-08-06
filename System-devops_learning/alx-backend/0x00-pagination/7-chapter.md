### Keyset Pagination

Keyset pagination is a method used to paginate results efficiently by using the values of the last retrieved item from the previous page to fetch the next set of items. This method is particularly useful when dealing with large datasets and ensures consistent performance and ordering even as new items are added.

#### How Keyset Pagination Works

1. **Initial Request**: Fetch the first set of items with a limit.
2. **Subsequent Requests**: Use the value of a specific field from the last item of the previous page to fetch the next set of items.

### Example Scenario

Assume you are paginating through a list of items ordered by their creation date in descending order.

#### Initial Request

The client requests the most recent 20 items:
```plaintext
GET /items?limit=20
```
This returns the 20 most recent items.

#### Response Example

```json
[
    {"id": 1, "created": "2021-01-21T00:00:00"},
    {"id": 2, "created": "2021-01-20T12:00:00"},
    ...
    {"id": 20, "created": "2021-01-20T00:00:00"}
]
```

#### Next Page Request

To fetch the next set of items, the client uses the creation date of the last item from the previous response:
```plaintext
GET /items?limit=20&created_lte=2021-01-20T00:00:00
```
This fetches the next 20 items where the creation date is less than or equal to `2021-01-20T00:00:00`.

### SQL Query Example

The SQL equivalent for the next page request might look like this:
```sql
SELECT *
FROM Items
WHERE created <= '2021-01-20T00:00:00'
ORDER BY created DESC
LIMIT 20;
```

### Benefits of Keyset Pagination

1. **Consistent Performance**: Performs efficiently even with large datasets, as it avoids the performance pitfalls of large offsets.
2. **Consistent Ordering**: Maintains consistent ordering even when new items are added, preventing issues like page drift.
3. **Integration with Existing Filters**: Works well with existing filters without needing significant backend changes.

### Downsides of Keyset Pagination

1. **Tight Coupling**: Requires the client to use filters and sorting fields for pagination, which can be restrictive.
2. **Low Cardinality Issues**: Not suitable for fields with low cardinality (e.g., enums) because there might not be enough unique values to paginate effectively.
3. **Complexity for Custom Sorting**: Complicated for API users when using custom sorting fields, as the client must adjust the filter based on the sorting field.

### Practical Example in Node.js with Express

Here’s how you might implement keyset pagination in a Node.js application using Express and a SQL database:

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
    const createdLte = req.query.created_lte;

    let query = 'SELECT * FROM Items ';
    let queryParams = [];

    if (createdLte) {
        query += 'WHERE created <= $1 ';
        queryParams.push(createdLte);
    }

    query += 'ORDER BY created DESC LIMIT $' + (queryParams.length + 1);
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

Keyset pagination is an efficient and consistent method for paginating large datasets. By using the value of the last item from the previous page as a filter, it maintains performance and ordering. This approach is particularly effective for time series or log data but can be complex for API users when dealing with custom sorting fields.