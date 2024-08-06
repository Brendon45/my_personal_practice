Querying information from a NoSQL database depends on the type of NoSQL database you are using. Each type has its own querying methods and languages. Here’s a guide on how to query information from the four main types of NoSQL databases: key-value stores, document stores, wide-column stores, and graph databases.

### Key-Value Stores
Key-value stores are the simplest NoSQL databases and do not support complex querying. You retrieve values based on their keys.

**Example with Redis (a key-value store):**
```bash
# Set a value
SET user:12345 '{"name": "John Doe", "email": "john@example.com"}'

# Get a value
GET user:12345
```
The `GET` command retrieves the value associated with the key `user:12345`.

### Document Stores
Document stores allow querying within documents using fields and values. MongoDB is a popular document store.

**Example with MongoDB:**
1. **Insert a document:**
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
2. **Query documents:**
   - **Find all documents:**
     ```javascript
     db.users.find();
     ```
   - **Find documents with specific criteria:**
     ```javascript
     db.users.find({ "age": { "$gte": 25 } });
     ```
     This query finds all users with age greater than or equal to 25.

### Wide-Column Stores
Wide-column stores use a structure similar to relational databases but with more flexibility in columns. Cassandra is a well-known wide-column store.

**Example with Cassandra (using CQL - Cassandra Query Language):**
1. **Create a table:**
   ```sql
   CREATE TABLE users (
     user_id UUID PRIMARY KEY,
     name TEXT,
     email TEXT,
     age INT
   );
   ```
2. **Insert data:**
   ```sql
   INSERT INTO users (user_id, name, email, age) VALUES (uuid(), 'John Doe', 'john@example.com', 30);
   ```
3. **Query data:**
   - **Select all data:**
     ```sql
     SELECT * FROM users;
     ```
   - **Select data with conditions:**
     ```sql
     SELECT * FROM users WHERE age >= 25;
     ```

### Graph Databases
Graph databases use nodes, edges, and properties to represent and store data. Neo4j is a popular graph database.

**Example with Neo4j (using Cypher query language):**
1. **Create nodes and relationships:**
   ```cypher
   CREATE (john:Person {name: 'John Doe', age: 30, email: 'john@example.com'}),
          (jane:Person {name: 'Jane Smith', age: 25, email: 'jane@example.com'}),
          (john)-[:FRIEND]->(jane);
   ```
2. **Query data:**
   - **Find all nodes:**
     ```cypher
     MATCH (n) RETURN n;
     ```
   - **Find specific nodes:**
     ```cypher
     MATCH (p:Person) WHERE p.age >= 25 RETURN p;
     ```
     This query finds all persons with age greater than or equal to 25.
   - **Find relationships:**
     ```cypher
     MATCH (john:Person {name: 'John Doe'})-[:FRIEND]->(friend) RETURN friend;
     ```
     This query finds all friends of John Doe.

### Summary
- **Key-Value Stores**: Retrieve values by keys using simple commands.
- **Document Stores**: Query within documents using field-value pairs, often with powerful query languages (e.g., MongoDB).
- **Wide-Column Stores**: Use a query language similar to SQL for flexible data retrieval (e.g., Cassandra).
- **Graph Databases**: Query nodes and relationships using specialized languages for graph structures (e.g., Cypher for Neo4j).

Each NoSQL database type has its own strengths and is suited to different types of queries and data structures. Understanding the querying mechanisms of each can help you effectively retrieve and manipulate data in a NoSQL environment.