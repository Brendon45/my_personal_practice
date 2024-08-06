### RHS Colon Filtering

Another approach to filtering in REST APIs is to place the operator on the right-hand side (RHS) of the parameter using a colon (`:`) to separate the field name and the operator.

#### Example

```plaintext
GET /items?price=gte:10&price=lte:100
```

This query fetches items where the price is between 10 and 100.

### Benefits of RHS Colon Filtering

1. **Ease of Parsing**: 
   - Easier to parse on the server side, especially if duplicate filters are not supported.
   - Many API frameworks can handle URL parameter arrays directly, meaning less custom parsing logic is needed.

2. **Grouping Filters**:
   - Filters with the same field name are grouped together, making it easier to manage multiple conditions on the same field.

### Downsides of RHS Colon Filtering

1. **Literal Values**:
   - Special handling is required for literal values. For example, distinguishing between `user_id=gt:100` (greater than 100) and a literal ID like `user_id=gt:100`.

### Example Implementation in Node.js with Express

```javascript
const express = require('express');
const app = express();

app.get('/items', (req, res) => {
    // Example query: /items?price=gte:10&price=lte:100
    const filters = {};
    
    Object.keys(req.query).forEach(key => {
        const [field, condition] = key.split(':');
        if (!filters[field]) {
            filters[field] = {};
        }
        const [operator, value] = req.query[key].split(':');
        filters[field][operator] = value;
    });
    
    console.log(filters);
    // filters example: { price: { gte: 10, lte: 100 } }

    // Implement your filtering logic here using the parsed filters

    res.send('Filtered items');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

### Summary

- **RHS Colon Filtering**: Simple and easy-to-parse method for more complex filters.
- **Considerations**: Each method has its own benefits and downsides, such as parsing complexity, handling of special characters, and user-friendliness.

By understanding these filtering methods, you can create more flexible and powerful APIs that better serve the needs of your clients.