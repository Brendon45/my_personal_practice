In JavaScript, dictionaries are commonly referred to as objects. Objects in JavaScript are collections of key-value pairs, where each key is a string (or a symbol) and each value can be of any data type, including other objects. Here's how you can manipulate objects in JavaScript:

### Manipulating Objects (Dictionaries) in JavaScript:

#### Creating an Object:

To create an object, you can use the curly braces `{}` notation and define key-value pairs inside:

```javascript
const person = {
  name: "John",
  age: 25,
  city: "Example City",
};
```

#### Accessing Values:

You can access the values of an object using dot notation or bracket notation:

```javascript
console.log(person.name);  // Output: John
console.log(person["age"]); // Output: 25
```

#### Modifying Values:

You can modify the values of an object by assigning new values to its properties:

```javascript
person.age = 26;
person["city"] = "New City";
```

#### Adding New Properties:

To add a new property to an object, simply assign a value to a new key:

```javascript
person.gender = "Male";
```

#### Deleting Properties:

To delete a property from an object, you can use the `delete` keyword:

```javascript
delete person.city;
```

#### Checking if a Property Exists:

You can check if a property exists in an object using the `in` operator or the `hasOwnProperty` method:

```javascript
console.log("name" in person);         // Output: true
console.log(person.hasOwnProperty("city"));  // Output: false
```

#### Iterating Through Properties:

You can loop through all the properties of an object using `for...in` loop:

```javascript
for (let key in person) {
  console.log(key, person[key]);
}
```

#### Example Usage:

```javascript
const person = {
  name: "John",
  age: 25,
  city: "Example City",
};

console.log(person.name);   // John
console.log(person.age);    // 25

person.age = 26;
person["city"] = "New City";

person.gender = "Male";

delete person.city;

for (let key in person) {
  console.log(key, person[key]);
}
```

Objects (or dictionaries) in JavaScript are versatile data structures that allow you to organize and manipulate data effectively. Understanding how to create, access, modify, and iterate through objects is crucial for working with complex data structures in JavaScript.