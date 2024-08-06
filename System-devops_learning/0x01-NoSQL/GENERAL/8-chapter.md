Inserting, updating, and deleting information in a NoSQL database varies depending on the type of NoSQL database you are using. Below are examples of how to perform these operations for each of the main types of NoSQL databases: key-value stores, document stores, wide-column stores, and graph databases.

### Key-Value Stores
**Example with Redis:**

- **Insert/Update Data**: In key-value stores, the same command is used for both inserting and updating.
  ```bash
  # Insert or update a value
  SET user:12345 '{"name": "John Doe", "email": "john@example.com"}'
  ```

- **Delete Data**:
  ```bash
  # Delete a value
  DEL user:12345
  ```

### Document Stores
**Example with MongoDB:**

- **Insert Data**:
  ```javascript
  db.users.insertOne({
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30,
    "address": {
      "street": "123 Main St",
      "city": "Anytown",
      "zip": "12345"
    }
  });
  ```

- **Update Data**:
  ```javascript
  // Update a single document
  db.users.updateOne(
    { "email": "john@example.com" }, // Filter criteria
    { $set: { "age": 31 } }          // Update operation
  );

  // Update multiple documents
  db.users.updateMany(
    { "city": "Anytown" },            // Filter criteria
    { $set: { "state": "CA" } }       // Update operation
  );
  ```

- **Delete Data**:
  ```javascript
  // Delete a single document
  db.users.deleteOne({ "email": "john@example.com" });

  // Delete multiple documents
  db.users.deleteMany({ "city": "Anytown" });
  ```

### Wide-Column Stores
**Example with Cassandra (using CQL - Cassandra Query Language):**

- **Insert Data**:
  ```sql
  INSERT INTO users (user_id, name, email, age) VALUES (uuid(), 'John Doe', 'john@example.com', 30);
  ```

- **Update Data**:
  ```sql
  UPDATE users SET age = 31 WHERE user_id = [specific-uuid];
  ```

- **Delete Data**:
  ```sql
  DELETE FROM users WHERE user_id = [specific-uuid];
  ```

### Graph Databases
**Example with Neo4j (using Cypher query language):**

- **Insert Data**:
  ```cypher
  CREATE (john:Person {name: 'John Doe', age: 30, email: 'john@example.com'});
  ```

- **Update Data**:
  ```cypher
  MATCH (john:Person {name: 'John Doe'})
  SET john.age = 31;
  ```

- **Delete Data**:
  ```cypher
  // Delete a node and its relationships
  MATCH (john:Person {name: 'John Doe'})
  DETACH DELETE john;
  ```

### Summary
- **Key-Value Stores (e.g., Redis)**: Use `SET` for insert/update and `DEL` for delete.
- **Document Stores (e.g., MongoDB)**: Use `insertOne` for insert, `updateOne` or `updateMany` for update, and `deleteOne` or `deleteMany` for delete.
- **Wide-Column Stores (e.g., Cassandra)**: Use `INSERT INTO` for insert, `UPDATE` for update, and `DELETE` for delete.
- **Graph Databases (e.g., Neo4j)**: Use `CREATE` for insert, `MATCH ... SET` for update, and `MATCH ... DETACH DELETE` for delete.

Each type of NoSQL database provides a distinct approach to data manipulation, tailored to its data model and use cases. 