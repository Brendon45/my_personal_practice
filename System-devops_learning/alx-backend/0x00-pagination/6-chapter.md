### Offset Pagination

Offset pagination is a common method used to paginate results in applications, especially those using SQL databases. It involves specifying a limit on the number of items to retrieve and an offset to indicate where to start fetching the items.

#### How Offset Pagination Works

1. **Limit**: The maximum number of items to return.
2. **Offset**: The number of items to skip before starting to return the items.

#### Example Scenario

Imagine you have a large dataset of items, and you want to display them 20 at a time. The initial request fetches the first 20 items. Subsequent requests fetch the next set of 20 items, and so on.

**Initial Request:**
```plaintext
GET /items?limit=20
```
This returns the first 20 items.

**Next Request (second page):**
```plaintext
GET /items?limit=20&offset=20
```
This returns items 21 to 40.

**Subsequent Request (third page):**
```plaintext
GET /items?limit=20&offset=40
```
This returns items 41 to 60.

### SQL Query Example

The SQL equivalent of the third request would look like this:
```sql
SELECT *
FROM Items
ORDER BY Id
LIMIT 20
OFFSET 40;
```

### Benefits of Offset Pagination

1. **Ease of Implementation**: Requires minimal code changes and can be directly integrated into SQL queries.
2. **Stateless**: The server doesn't need to maintain any session information about the client's current page.
3. **Works with Sorting**: Can be combined with custom `ORDER BY` parameters.

### Downsides of Offset Pagination

1. **Performance Issues with Large Offsets**:
   - For large datasets, using a high offset value can be inefficient. The database must scan and skip a significant number of rows, which can slow down the query.
   
   **Example Issue**:
   - Query with a large offset: `GET /items?limit=20&offset=1000000`
   - The database has to scan and skip the first 1,000,000 rows, which can be resource-intensive.

2. **Inconsistent Results with New Inserts (Page Drift)**:
   - If new items are inserted into the table between requests, the offset might shift, leading to inconsistencies.
   
   **Example Issue**:
   - Initial query: `GET /items?offset=0&limit=15`
   - 10 new items are added to the table.
   - Next query: `GET /items?offset=15&limit=15`
   - The second query now returns 5 new items and 10 items that were already retrieved, because the new items shifted the offset.

### Practical Example in Node.js with Express

Here’s how you might implement offset pagination in a Node.js application using Express and a SQL database:

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
    const offset = parseInt(req.query.offset, 10) || 0;

    try {
        const result = await pool.query(
            'SELECT * FROM Items ORDER BY Id LIMIT $1 OFFSET $2',
            [limit, offset]
        );
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

Offset pagination is straightforward to implement and widely used, particularly with SQL databases. While it offers simplicity and statelessness, it can face performance issues with large offsets and inconsistencies due to new data insertions. For small datasets or applications where data doesn't change frequently, it remains an effective and easy-to-implement solution.