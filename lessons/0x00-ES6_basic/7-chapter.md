Chapter 3: Arrow Functions and Default Function Parameters

Arrow functions and default function parameters are two powerful features introduced in ECMAScript 6 (ES6) that enhance the capabilities of JavaScript functions.

1. **Arrow Functions**:
   - Arrow functions provide a concise syntax for writing functions.
   - They are declared using the arrow (`=>`) syntax.
   - Arrow functions do not have their own `this` context; instead, they inherit `this` from the surrounding lexical scope.
   - Example:
     ```javascript
     const greet = (name) => {
       return `Hello, ${name}!`;
     };
     ```

2. **Default Function Parameters**:
   - Default function parameters allow you to specify default values for function parameters.
   - If a parameter is not provided when the function is called, its default value will be used.
   - Example:
     ```javascript
     const greet = (name = 'World') => {
       return `Hello, ${name}!`;
     };
     ```

3. **Benefits**:
   - Arrow functions offer a more concise syntax, especially for simple functions.
   - Default function parameters improve code readability by providing default values for function arguments, reducing the need for manual checks.

Understanding arrow functions and default function parameters is essential for writing clean, concise, and efficient JavaScript code, as they provide convenient ways to define and work with functions.