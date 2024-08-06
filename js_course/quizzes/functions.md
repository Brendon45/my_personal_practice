### Module 5: Functions in JavaScript - Quizzes

#### Quiz 1: Basic Function Knowledge
1. **What is a function in JavaScript?**
    - a) A way to store data
    - b) A reusable block of code designed to perform a particular task
    - c) A loop that repeats code
    - d) A method to style HTML

2. **How do you call a function named `greet`?**
    - a) `call greet`
    - b) `function greet`
    - c) `greet()`
    - d) `run greet`

3. **What is the output of the following code?**
    ```javascript
    function sayHello() {
      console.log("Hello, World!");
    }
    sayHello();
    ```
    - a) `Hello`
    - b) `World`
    - c) `Hello, World!`
    - d) No output

#### Quiz 2: Parameters and Arguments
1. **What are parameters in a function?**
    - a) Values passed to the function when it is called
    - b) Variables listed as part of the function definition
    - c) The result of a function
    - d) The name of the function

2. **What is the output of the following code?**
    ```javascript
    function add(a, b) {
      return a + b;
    }
    console.log(add(5, 3));
    ```
    - a) `5`
    - b) `3`
    - c) `8`
    - d) `undefined`

3. **Which of the following correctly defines a function with default parameters?**
    - a) `function greet(name) { console.log("Hello, " + name + "!"); }`
    - b) `function greet(name = "Stranger") { console.log("Hello, " + name + "!"); }`
    - c) `function greet("Stranger") { console.log("Hello, " + name + "!"); }`
    - d) `function greet { name = "Stranger" { console.log("Hello, " + name + "!"); }`

#### Quiz 3: Arrow Functions and Scope
1. **Which of the following is the correct syntax for an arrow function?**
    - a) `const add = function(a, b) { return a + b; };`
    - b) `const add = (a, b) => { return a + b; };`
    - c) `const add => (a, b) { return a + b; };`
    - d) `const add = (a, b) -> { return a + b; };`

2. **What will be the output of the following code?**
    ```javascript
    let globalVar = "Global Scope";

    function testScope() {
      let localVar = "Local Scope";
      console.log(localVar);
    }

    testScope();
    console.log(globalVar);
    ```
    - a) `Global Scope` `Local Scope`
    - b) `Local Scope` `Local Scope`
    - c) `Local Scope` `Global Scope`
    - d) `Global Scope` `Global Scope`

3. **What does the `return` statement do in a function?**
    - a) Stops the function execution and specifies a value to be returned
    - b) Defines a parameter for the function
    - c) Calls the function
    - d) Declares a variable inside the function

#### Quiz 4: Advanced Function Concepts
1. **What will be the output of the following code?**
    ```javascript
    const multiply = (a, b) => a * b;
    console.log(multiply(4, 5));
    ```
    - a) `20`
    - b) `9`
    - c) `1`
    - d) `undefined`

2. **What is an anonymous function?**
    - a) A function with a name
    - b) A function that does not have a name
    - c) A function that takes no parameters
    - d) A function that does not return a value

3. **Which method uses an anonymous function in its argument?**
    - a) `setTimeout`
    - b) `alert`
    - c) `console.log`
    - d) `prompt`