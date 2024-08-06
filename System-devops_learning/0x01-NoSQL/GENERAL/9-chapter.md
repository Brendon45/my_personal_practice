Using MongoDB involves several key tasks: setting up the database, connecting to it, creating databases and collections, and performing CRUD (Create, Read, Update, Delete) operations. Below, I'll walk you through these steps with examples.

### 1. Setting Up MongoDB

Before you can use MongoDB, you need to have it installed and running. Here’s a quick recap on starting MongoDB if it’s already installed.

**Starting MongoDB:**
```bash
sudo service mongod start
```

### 2. Connecting to MongoDB

Use the MongoDB shell (mongo) or a GUI tool like MongoDB Compass to connect to your MongoDB instance.

**Connecting via MongoDB shell:**
```bash
mongo
```

### 3. Basic Commands in MongoDB

#### Creating a Database
You switch to a database (creating it if it doesn’t exist) by using the `use` command.
```javascript
use mydatabase
```
This switches to the `mydatabase` database. If `mydatabase` does not exist, it will be created.

#### Creating a Collection
A collection is similar to a table in a relational database.
```javascript
db.createCollection("mycollection")
```
However, collections are typically created implicitly when you insert the first document.

### 4. CRUD Operations in MongoDB

#### Insert Documents
You can insert documents into a collection using the `insertOne` or `insertMany` methods.

**Single Document:**
```javascript
db.mycollection.insertOne({
  name: "John Doe",
  email: "john@example.com",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    zip: "12345"
  }
})
```

**Multiple Documents:**
```javascript
db.mycollection.insertMany([
  { name: "Jane Doe", email: "jane@example.com", age: 25 },
  { name: "Jim Brown", email: "jim@example.com", age: 27 }
])
```

#### Query Documents
You retrieve documents from a collection using the `find` method.

**Find All Documents:**
```javascript
db.mycollection.find()
```

**Find Documents with Specific Criteria:**
```javascript
db.mycollection.find({ age: { $gte: 25 } })
```

#### Update Documents
You update documents using the `updateOne` or `updateMany` methods.

**Update a Single Document:**
```javascript
db.mycollection.updateOne(
  { email: "john@example.com" },    // Filter
  { $set: { age: 31 } }             // Update
)
```

**Update Multiple Documents:**
```javascript
db.mycollection.updateMany(
  { age: { $lt: 30 } },             // Filter
  { $set: { status: "active" } }    // Update
)
```

#### Delete Documents
You delete documents using the `deleteOne` or `deleteMany` methods.

**Delete a Single Document:**
```javascript
db.mycollection.deleteOne({ email: "john@example.com" })
```

**Delete Multiple Documents:**
```javascript
db.mycollection.deleteMany({ age: { $lt: 30 } })
```

### Summary
- **Setup and Start**: Install MongoDB and start the service using `sudo service mongod start`.
- **Connect**: Use the `mongo` shell or a GUI like MongoDB Compass.
- **Create Database**: Use `use mydatabase`.
- **Create Collection**: Use `db.createCollection("mycollection")` or insert a document directly.
- **CRUD Operations**: 
  - **Insert**: `insertOne` and `insertMany`.
  - **Query**: `find`.
  - **Update**: `updateOne` and `updateMany`.
  - **Delete**: `deleteOne` and `deleteMany`.

This guide covers the basics of using MongoDB. You can build on these foundational commands to handle more complex operations as needed.