// object literal enhancement
const name = 'John';
const age = 30;
const person = {
  name,
  age
};

console.log(person); // { name: 'John', age: 30 }

// Object literal enhancement is a shorthand syntax for creating object literals.
// When the property name and the variable name are the same, you can use the shorthand syntax.
// This is useful when you want to create an object with properties that have the same name as the variables.
// The property name is inferred from the variable name.
// The property value is inferred from the variable value.
// This syntax makes the code more concise and readable.

// computed property names
const propName = 'name';
const obj = {
    [propName]: 'John'
    };

console.log(obj); // { name: 'John' }

// Computed property names allow you to create object properties with dynamic names.
// The property name is computed at runtime using square brackets [].
// The expression inside the square brackets is evaluated and the result is used as the property name.
// This syntax is useful when you want to create object properties with dynamic names.
// The property name can be a variable or an expression.
// This syntax is commonly used when working with objects that have dynamic properties.

// method properties
const obj1 = {
    name: 'John',
    greet() {
      return `Hello, my name is ${this.name}`;
    }
  };
  
  console.log(obj1.greet()); // Hello, my name is John


// Method properties allow you to define object methods using concise syntax.
// The method name is followed by parentheses () and the function body.
// The this keyword refers to the object itself.
// This syntax is useful when you want to define object methods in a more concise way.
// The method properties are defined using the function shorthand syntax.
// The method properties are added to the object as functions.

// object destructuring

const person1 = {
    firstName: 'John',
    lastName: 'Doe',
    agee: 31
  };
  
  const { firstName, lastName, agee } = person1;
  
  console.log(firstName, lastName, agee); // John Doe 30

// Object destructuring allows you to extract object properties and assign them to variables.           
// The variable names must match the object property names.
// The object properties are assigned to variables using the curly braces {}.
// The variable names are separated by commas.
// You can use object destructuring to extract multiple properties from an object.
// This syntax makes it easier to work with objects by extracting only the properties you need.
// The object destructuring syntax is concise and readable.

