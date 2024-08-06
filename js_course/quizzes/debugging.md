### Quizzes for Debugging in JavaScript

#### Quiz 1: Identifying Errors

1. **Question**: What type of error is present in the following code?
    ```javascript
    console.log("Hello, World!) // Missing closing quotation mark
    ```
    - a) Syntax Error
    - b) Runtime Error
    - c) Logical Error
    - d) No Error

    **Answer**: a) Syntax Error

2. **Question**: What will be the output of the following code?
    ```javascript
    let x = 10;
    console.log(y); // y is not defined
    ```
    - a) 10
    - b) undefined
    - c) ReferenceError
    - d) NaN

    **Answer**: c) ReferenceError

#### Quiz 2: Debugging Techniques

3. **Question**: Which of the following methods can be used to pause code execution and inspect variables?
    - a) console.log()
    - b) alert()
    - c) debugger
    - d) document.write()

    **Answer**: c) debugger

4. **Question**: What is the purpose of using `console.log()` in debugging?
    - a) To stop the code execution
    - b) To display messages in the browser's console
    - c) To create breakpoints
    - d) To run the code faster

    **Answer**: b) To display messages in the browser's console

#### Quiz 3: Error Handling

5. **Question**: What will be the output of the following code if the `try...catch` block is used correctly?
    ```javascript
    try {
      let result = riskyFunction();
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
    ```
    - a) The result of `riskyFunction()`
    - b) "An error occurred: " followed by the error message
    - c) undefined
    - d) NaN

    **Answer**: b) "An error occurred: " followed by the error message

6. **Question**: Which of the following is the correct way to handle errors in JSON parsing?
    - a) `let data = JSON.parse(jsonString);`
    - b) `let data = JSON.stringify(jsonString);`
    - c) `try { let data = JSON.parse(jsonString); } catch (error) { console.error("Invalid JSON:", error.message); }`
    - d) `if (JSON.parse(jsonString)) { let data = JSON.parse(jsonString); }`

    **Answer**: c) `try { let data = JSON.parse(jsonString); } catch (error) { console.error("Invalid JSON:", error.message); }`

#### Quiz 4: Practical Debugging

7. **Question**: What is the output of the following code if you add a `console.log()` statement to debug it?
    ```javascript
    function add(a, b) {
      return a + b;
    }
    console.log(add(3, 4));
    ```
    - a) 34
    - b) 7
    - c) undefined
    - d) NaN

    **Answer**: b) 7

8. **Question**: What does the following code do if the `debugger` statement is added?
    ```javascript
    function multiply(a, b) {
      debugger;
      return a * b;
    }
    let product = multiply(4, 5);
    console.log(product);
    ```
    - a) Pauses the execution at the `debugger` statement
    - b) Skips the `debugger` statement and continues execution
    - c) Throws an error
    - d) Logs `4` to the console

    **Answer**: a) Pauses the execution at the `debugger` statement

#### Quiz 5: Code Analysis

9. **Question**: What will be the output of the following code?
    ```javascript
    function isEven(num) {
      return num % 2 === 0;
    }
    console.log(isEven(4));
    ```
    - a) true
    - b) false
    - c) undefined
    - d) NaN

    **Answer**: a) true

10. **Question**: What is the issue in the following code and how can it be fixed?
    ```javascript
    let a = 5;
    let b = "10";
    
    function addNumbers(a, b) {
      return a + b;
    }
    
    console.log(addNumbers(a, b));
    ```
    - a) No issue
    - b) Type conversion issue, fix with `return a + Number(b);`
    - c) Syntax error, fix with `return a + b;`
    - d) Logical error, fix with `return a - b;`

    **Answer**: b) Type conversion issue, fix with `return a + Number(b);`