### Variables in JavaScript:

#### 1. Declaring Variables:
- In JavaScript, variables are used to store data values.
- You can declare variables using three keywords: `var`, `let`, and `const`.
- Example:
  ```javascript
  var age = 25; // using var (global scope)
  let name = "John"; // using let (block scope)
  const pi = 3.14; // using const (constant value)
  ```

#### 2. Variable Naming Rules:
- Variable names can contain letters, digits, underscores, and dollar signs.
- They must begin with a letter, underscore, or dollar sign.
- Variable names are case-sensitive.
- Example:
  ```javascript
  var myVariable = 10;
  var MyVariable = 20; // Different from myVariable
  ```

#### 3. Data Types:
- JavaScript has dynamic typing, meaning you don't need to specify the data type when declaring variables.
- Common data types include:
  - **Number**: Numeric values (e.g., 10, 3.14).
  - **String**: Textual data enclosed in single or double quotes (e.g., "Hello", 'World').
  - **Boolean**: Represents true or false values.
  - **Null**: Represents the absence of any value.
  - **Undefined**: Represents variables that have been declared but not assigned a value.
- Example:
  ```javascript
  var num = 10; // Number
  var greeting = "Hello"; // String
  var isTrue = true; // Boolean
  var empty = null; // Null
  var undefinedVar; // Undefined
  ```

### Basic JavaScript Code Examples:

#### 1. Printing to Console:
- Use `console.log()` to print messages to the browser console.
- Example:
  ```javascript
  console.log("Hello, World!");
  ```

#### 2. Simple Math Operations:
- JavaScript supports arithmetic operations like addition, subtraction, multiplication, and division.
- Example:
  ```javascript
  var x = 10;
  var y = 5;
  var sum = x + y;
  console.log("Sum:", sum);
  ```

#### 3. Concatenating Strings:
- Use the `+` operator to concatenate strings.
- Example:
  ```javascript
  var firstName = "John";
  var lastName = "Doe";
  var fullName = firstName + " " + lastName;
  console.log("Full Name:", fullName);
  ```

#### 4. Getting User Input:
- Use `prompt()` to get input from the user.
- Example:
  ```javascript
  var name = prompt("Enter your name:");
  console.log("Hello,", name);
  ```

These examples provide a basic understanding of variables and how to write simple JavaScript code. Encourage beginners to experiment with these concepts and explore further as they progress in their learning journey.