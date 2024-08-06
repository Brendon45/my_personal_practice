### Module 3: Operators in JavaScript

#### 3.1 What are Operators?
- **Definition**: Operators are special symbols used to perform operations on operands (values and variables). They are the building blocks of logical and mathematical operations in JavaScript.

#### 3.2 Types of Operators

1. **Arithmetic Operators**: Used to perform basic mathematical operations.
    - **Addition (`+`)**: Adds two values.
      ```javascript
      let sum = 5 + 3; // sum is 8
      ```
    - **Subtraction (`-`)**: Subtracts one value from another.
      ```javascript
      let difference = 10 - 4; // difference is 6
      ```
    - **Multiplication (`*`)**: Multiplies two values.
      ```javascript
      let product = 7 * 2; // product is 14
      ```
    - **Division (`/`)**: Divides one value by another.
      ```javascript
      let quotient = 20 / 4; // quotient is 5
      ```
    - **Modulus (`%`)**: Returns the remainder of a division.
      ```javascript
      let remainder = 10 % 3; // remainder is 1
      ```
    - **Exponentiation (`**`)**: Raises the first value to the power of the second value.
      ```javascript
      let power = 2 ** 3; // power is 8 (2^3)
      ```

2. **Assignment Operators**: Used to assign values to variables.
    - **Assignment (`=`)**: Assigns a value to a variable.
      ```javascript
      let x = 10;
      ```
    - **Addition Assignment (`+=`)**: Adds and assigns the value.
      ```javascript
      let y = 5;
      y += 3; // y is now 8
      ```
    - **Subtraction Assignment (`-=`)**: Subtracts and assigns the value.
      ```javascript
      let z = 10;
      z -= 2; // z is now 8
      ```
    - **Multiplication Assignment (`*=`)**: Multiplies and assigns the value.
      ```javascript
      let a = 4;
      a *= 2; // a is now 8
      ```
    - **Division Assignment (`/=`)**: Divides and assigns the value.
      ```javascript
      let b = 12;
      b /= 3; // b is now 4
      ```

3. **Comparison Operators**: Used to compare two values and return a Boolean (`true` or `false`).
    - **Equal to (`==`)**: Compares two values for equality (type conversion).
      ```javascript
      let isEqual = (5 == '5'); // true
      ```
    - **Strict Equal to (`===`)**: Compares two values for equality without type conversion.
      ```javascript
      let isStrictEqual = (5 === '5'); // false
      ```
    - **Not Equal to (`!=`)**: Compares two values for inequality (type conversion).
      ```javascript
      let isNotEqual = (5 != '5'); // false
      ```
    - **Strict Not Equal to (`!==`)**: Compares two values for inequality without type conversion.
      ```javascript
      let isStrictNotEqual = (5 !== '5'); // true
      ```
    - **Greater than (`>`)**: Checks if the left value is greater than the right value.
      ```javascript
      let isGreater = (10 > 5); // true
      ```
    - **Less than (`<`)**: Checks if the left value is less than the right value.
      ```javascript
      let isLess = (10 < 5); // false
      ```
    - **Greater than or equal to (`>=`)**: Checks if the left value is greater than or equal to the right value.
      ```javascript
      let isGreaterOrEqual = (10 >= 10); // true
      ```
    - **Less than or equal to (`<=`)**: Checks if the left value is less than or equal to the right value.
      ```javascript
      let isLessOrEqual = (10 <= 5); // false
      ```

4. **Logical Operators**: Used to combine multiple Boolean expressions.
    - **AND (`&&`)**: Returns true if both expressions are true.
      ```javascript
      let andResult = (5 > 3 && 8 > 6); // true
      ```
    - **OR (`||`)**: Returns true if at least one of the expressions is true.
      ```javascript
      let orResult = (5 > 3 || 8 < 6); // true
      ```
    - **NOT (`!`)**: Returns the opposite Boolean value.
      ```javascript
      let notResult = !(5 > 3); // false
      ```

5. **Unary Operators**: Operate on a single operand.
    - **Increment (`++`)**: Increases a variable's value by 1.
      ```javascript
      let count = 0;
      count++; // count is now 1
      ```
    - **Decrement (`--`)**: Decreases a variable's value by 1.
      ```javascript
      let countDown = 10;
      countDown--; // countDown is now 9
      ```
    - **Unary Negation (`-`)**: Converts a positive number to negative and vice versa.
      ```javascript
      let positive = 10;
      let negative = -positive; // negative is -10
      ```
    - **Unary Plus (`+`)**: Tries to convert the operand into a number.
      ```javascript
      let strNumber = "10";
      let num = +strNumber; // num is 10
      ```

#### 3.3 Example Code Snippets

1. **Arithmetic Operations**:
    ```javascript
    let num1 = 10;
    let num2 = 3;
    console.log("Addition: " + (num1 + num2)); // Output: 13
    console.log("Subtraction: " + (num1 - num2)); // Output: 7
    console.log("Multiplication: " + (num1 * num2)); // Output: 30
    console.log("Division: " + (num1 / num2)); // Output: 3.33
    console.log("Modulus: " + (num1 % num2)); // Output: 1
    ```

2. **Using Assignment Operators**:
    ```javascript
    let num = 10;
    num += 5; // num is now 15
    num *= 2; // num is now 30
    console.log(num); // Output: 30
    ```

3. **Comparison and Logical Operators**:
    ```javascript
    let a = 10;
    let b = 20;
    console.log(a > b); // Output: false
    console.log(a < b); // Output: true
    console.log(a == 10 && b == 20); // Output: true
    console.log(a == 10 || b == 10); // Output: true
    console.log(!(a == 10)); // Output: false
    ```

4. **Unary Operators**:
    ```javascript
    let x = 5;
    x++; // x is now 6
    console.log(x); // Output: 6
    x--; // x is now 5
    console.log(x); // Output: 5
    let y = -x; // y is -5
    console.log(y); // Output: -5
    ```

### Conclusion
- **Recap**: We covered various types of operators, including arithmetic, assignment, comparison, logical, and unary operators, with examples demonstrating their usage.
- **Next Module Preview**: In the next module, we'll explore control structures such as conditionals (if/else) and loops (for, while) to control the flow of your programs.

By understanding and practicing these operators, students will be able to perform a wide range of operations and build more complex and functional JavaScript programs.