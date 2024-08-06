### Tasks for Debugging in JavaScript

#### Task 1: Syntax Errors
**Objective**: Identify and fix syntax errors in the given code.
- **Instructions**: The following code contains several syntax errors. Identify and correct them.

```javascript
function greet(name {
  console.log("Hello, " + name + "!);
}
greet("Alice";
```
- **Expected Output**: `Hello, Alice!`

#### Task 2: Runtime Errors
**Objective**: Identify and handle runtime errors.
- **Instructions**: The following code contains a runtime error. Identify the error and fix it using a `try...catch` block.

```javascript
let numbers = [1, 2, 3];
console.log(numbers[5].toString());
```
- **Expected Output**: An error message indicating that the element does not exist, handled gracefully.

#### Task 3: Logical Errors
**Objective**: Identify and correct logical errors.
- **Instructions**: The following code is supposed to check if a number is even. Identify and correct the logical error.

```javascript
function isEven(num) {
  return num % 2 === 1;
}
console.log(isEven(4)); // Expected Output: true
```
- **Expected Output**: `false` (because 4 is an even number)

#### Task 4: Using `console.log()`
**Objective**: Use `console.log()` to debug and understand the flow of a program.
- **Instructions**: The following code is supposed to calculate the factorial of a number. Add `console.log()` statements to debug and understand how it works.

```javascript
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
let result = factorial(5);
console.log(result); // Expected Output: 120
```

#### Task 5: Breakpoints
**Objective**: Use breakpoints to debug a function.
- **Instructions**: Open your browser's developer tools, copy the following code into the console, and set breakpoints to debug the function.

```javascript
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
let maxNumber = findMax([3, 5, 7, 2, 8]);
console.log(maxNumber); // Expected Output: 8
```

#### Task 6: Using the `debugger` Statement
**Objective**: Use the `debugger` statement to pause code execution and inspect variables.
- **Instructions**: Insert the `debugger` statement in the following code and use the browser's developer tools to inspect the variables.

```javascript
function calculateSum(a, b) {
  debugger;
  return a + b;
}
let sum = calculateSum(10, 15);
console.log(sum); // Expected Output: 25
```

#### Task 7: Error Handling with `try...catch`
**Objective**: Implement error handling in a function that can fail.
- **Instructions**: The following code can potentially cause an error. Implement a `try...catch` block to handle the error gracefully.

```javascript
function parseJSON(jsonString) {
  let data = JSON.parse(jsonString);
  console.log(data);
}
let jsonString = '{"name": "John", "age": 30}';
parseJSON(jsonString); // Expected Output: { name: "John", age: 30 }

jsonString = '{name: "John", age: 30}'; // Invalid JSON
parseJSON(jsonString); // Expected Output: Error message handled gracefully
```

#### Task 8: Linting
**Objective**: Use a linting tool to identify potential issues in the code.
- **Instructions**: Install ESLint and run it on the following code to identify and fix any issues.

```javascript
let a = 5;
let b = "10";

function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(a, b)); // Expected Output: 15 (after fixing type conversion issue)
```
