### Module 5: Functions in JavaScript - Student Tasks

#### Task 1: Basic Function Creation
1. **Objective**: Create a simple function to greet the user.
2. **Instructions**:
    - Define a function named `sayHello` that prints "Hello, World!" to the console.
    - Call the function to see the output.
3. **Example**:
    ```javascript
    function sayHello() {
      console.log("Hello, World!");
    }
    sayHello(); // Output: Hello, World!
    ```

#### Task 2: Function with Parameters
1. **Objective**: Create a function that takes parameters and returns a value.
2. **Instructions**:
    - Define a function named `add` that takes two parameters and returns their sum.
    - Call the function with different sets of numbers and print the results.
3. **Example**:
    ```javascript
    function add(a, b) {
      return a + b;
    }
    console.log(add(2, 3)); // Output: 5
    console.log(add(10, 15)); // Output: 25
    ```

#### Task 3: Function with Default Parameters
1. **Objective**: Create a function with a default parameter.
2. **Instructions**:
    - Define a function named `greet` that takes one parameter `name` with a default value of "Stranger".
    - The function should print "Hello, [name]!" to the console.
    - Call the function without arguments and with different names.
3. **Example**:
    ```javascript
    function greet(name = "Stranger") {
      console.log("Hello, " + name + "!");
    }
    greet(); // Output: Hello, Stranger!
    greet("Alice"); // Output: Hello, Alice!
    ```

#### Task 4: Arrow Functions
1. **Objective**: Practice using arrow functions.
2. **Instructions**:
    - Define an arrow function named `square` that takes one parameter and returns its square.
    - Call the function with different numbers and print the results.
3. **Example**:
    ```javascript
    const square = (n) => n * n;
    console.log(square(4)); // Output: 16
    console.log(square(7)); // Output: 49
    ```

#### Task 5: Function with Multiple Parameters
1. **Objective**: Create a function that takes multiple parameters and performs an operation.
2. **Instructions**:
    - Define a function named `multiply` that takes three parameters and returns their product.
    - Call the function with different sets of numbers and print the results.
3. **Example**:
    ```javascript
    function multiply(a, b, c) {
      return a * b * c;
    }
    console.log(multiply(2, 3, 4)); // Output: 24
    console.log(multiply(1, 5, 6)); // Output: 30
    ```

#### Task 6: Anonymous Function
1. **Objective**: Use an anonymous function in a practical scenario.
2. **Instructions**:
    - Use the `setTimeout` function to create an anonymous function that prints "Time's up!" to the console after 3 seconds.
3. **Example**:
    ```javascript
    setTimeout(function() {
      console.log("Time's up!");
    }, 3000);
    ```

#### Task 7: Function Scope
1. **Objective**: Understand the concept of local and global scope.
2. **Instructions**:
    - Define a global variable `message` with the value "Global Scope".
    - Define a function `testScope` that creates a local variable `message` with the value "Local Scope".
    - Inside the function, print the local variable `message`.
    - Outside the function, print the global variable `message`.
    - Call the function and observe the outputs.
3. **Example**:
    ```javascript
    let message = "Global Scope";

    function testScope() {
      let message = "Local Scope";
      console.log(message); // Output: Local Scope
    }

    testScope();
    console.log(message); // Output: Global Scope
    ```
