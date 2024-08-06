### Module 5: Functions in JavaScript

#### 5.1 What are Functions?
- **Definition**: Functions are reusable blocks of code designed to perform a particular task. They can take inputs, called parameters, and return an output. Functions help in organizing code, making it more modular, readable, and maintainable.

#### 5.2 Defining a Function
- **Function Declaration**:
  ```javascript
  function greet() {
    console.log("Hello, World!");
  }
  ```

- **Function Expression**:
  ```javascript
  const greet = function() {
    console.log("Hello, World!");
  };
  ```

#### 5.3 Calling a Function
- **Syntax**: To call a function, use its name followed by parentheses.
  ```javascript
  greet(); // Output: Hello, World!
  ```

#### 5.4 Parameters and Arguments
- **Parameters**: Variables listed as a part of the function definition.
  ```javascript
  function greet(name) {
    console.log("Hello, " + name + "!");
  }
  ```
- **Arguments**: Values passed to the function when it is called.
  ```javascript
  greet("Alice"); // Output: Hello, Alice!
  ```

#### 5.5 Return Statement
- **Definition**: The `return` statement ends the function execution and specifies a value to be returned to the function caller.
  ```javascript
  function add(a, b) {
    return a + b;
  }
  let sum = add(5, 3); // sum is 8
  ```

#### 5.6 Function Scope
- **Local Scope**: Variables declared within a function are local to that function.
  ```javascript
  function testScope() {
    let localVar = "I am local";
    console.log(localVar); // Output: I am local
  }
  testScope();
  // console.log(localVar); // Error: localVar is not defined
  ```

- **Global Scope**: Variables declared outside any function are global and can be accessed from anywhere in the code.
  ```javascript
  let globalVar = "I am global";
  function testGlobalScope() {
    console.log(globalVar); // Output: I am global
  }
  testGlobalScope();
  console.log(globalVar); // Output: I am global
  ```

#### 5.7 Arrow Functions
- **Syntax**: Arrow functions provide a shorter syntax for writing functions.
  ```javascript
  const greet = (name) => {
    console.log("Hello, " + name + "!");
  };
  greet("Bob"); // Output: Hello, Bob!
  ```

- **Implicit Return**: For single-expression functions, the `return` keyword and curly braces can be omitted.
  ```javascript
  const add = (a, b) => a + b;
  let sum = add(4, 6); // sum is 10
  ```

#### 5.8 Example Code Snippets

1. **Simple Function**:
    ```javascript
    function sayHello() {
      console.log("Hello!");
    }
    sayHello(); // Output: Hello!
    ```

2. **Function with Parameters**:
    ```javascript
    function multiply(a, b) {
      return a * b;
    }
    let result = multiply(3, 4); // result is 12
    ```

3. **Arrow Function**:
    ```javascript
    const square = (n) => n * n;
    console.log(square(5)); // Output: 25
    ```

4. **Function with Default Parameters**:
    ```javascript
    function greet(name = "Stranger") {
      console.log("Hello, " + name + "!");
    }
    greet(); // Output: Hello, Stranger!
    greet("Alice"); // Output: Hello, Alice!
    ```

5. **Anonymous Function**:
    ```javascript
    setTimeout(function() {
      console.log("This message is delayed.");
    }, 2000); // Output (after 2 seconds): This message is delayed.
    ```

### Conclusion
- **Recap**: We covered what functions are, how to define and call them, the use of parameters and return values, scope, and arrow functions with practical examples.
- **Next Module Preview**: In the next module, we'll explore objects, their properties, methods, and how to manipulate them in JavaScript.

Understanding functions is crucial for writing efficient and reusable code. Functions help break down complex problems into smaller, manageable pieces, making your code cleaner and more organized.