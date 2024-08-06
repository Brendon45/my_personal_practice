In JavaScript, an object property can itself be an object. Let's explore this concept with an example. Consider the following object representing a person:

```javascript
const person = {
  name: {
    first: "Bob",
    last: "Smith",
  },
  // other properties...
};
```

Now, to access the nested properties (like the first and last name), you can chain the property names using dot notation:

```javascript
person.name.first; // "Bob"
person.name.last;  // "Smith"
```

If you prefer an alternative, you can use bracket notation, which is particularly useful when the property name is stored in a variable:

```javascript
person["name"]["first"]; // "Bob"
person["name"]["last"];  // "Smith"
```

It's important to adapt any method code that accesses these properties. For instance, if you had code using array-style indexing like `name[0]` or `name[1]`, you should update it to use the new structure: `name.first` and `name.last`.

Here's an example:

```javascript
const person = {
  name: ["Bob", "Smith"],
  age: 32,
};

function logProperty(propertyName) {
  console.log(person[propertyName]);
}

logProperty("name"); // ["Bob", "Smith"]
logProperty("age");  // 32
```

While dot notation is generally more concise and readable, bracket notation proves useful when the property name is dynamic or stored in a variable.