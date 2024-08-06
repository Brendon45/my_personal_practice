Chapter 6: Object Creation and Properties in ES6

In ECMAScript 6 (ES6), several new features were introduced to simplify object creation and manipulation, making JavaScript code more expressive and concise.

1. **Object Literal Enhancement**:
   - ES6 introduced shorthand syntax for defining object properties when the property name matches the variable name.
   - This shorthand allows you to omit the property name and just specify the variable name, reducing redundancy.
   - Example:
     ```javascript
     const name = 'John';
     const age = 30;
     const person = { name, age };
     ```

2. **Computed Property Names**:
   - ES6 allows you to use expressions for property names within object literals by enclosing them in square brackets (`[]`).
   - This feature enables dynamic property names based on variables or computed values.
   - Example:
     ```javascript
     const propertyName = 'foo';
     const obj = {
       [propertyName]: 'bar'
     };
     ```

3. **Method Definitions**:
   - ES6 introduced a more concise syntax for defining methods within object literals.
   - You can define methods directly without using the `function` keyword.
   - Example:
     ```javascript
     const person = {
       name: 'John',
       greet() {
         console.log(`Hello, ${this.name}!`);
       }
     };
     ```

4. **Object Destructuring**:
   - Object destructuring allows you to extract properties from objects and assign them to variables in a more concise way.
   - It simplifies the process of accessing nested properties and working with objects in function parameters.
   - Example:
     ```javascript
     const person = {
       name: 'John',
       age: 30
     };
     const { name, age } = person;
     ```

ES6 introduced several enhancements to object creation and manipulation, including shorthand syntax for property definitions, computed property names, concise method definitions, and object destructuring. These features make JavaScript code more expressive, readable, and efficient when working with objects.