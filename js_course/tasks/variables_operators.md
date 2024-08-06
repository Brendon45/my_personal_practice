

### Tasks for Variables and Basic Coding

#### Task 1: Declaring and Using Variables
1. **Objective**: Practice declaring and using variables.
2. **Instructions**:
    - Declare a variable `firstName` and assign it your first name.
    - Declare a variable `lastName` and assign it your last name.
    - Declare a variable `fullName` that combines `firstName` and `lastName` with a space in between.
    - Print the `fullName` to the console.
3. **Example**:
    ```javascript
    let firstName = "John";
    let lastName = "Doe";
    let fullName = firstName + " " + lastName;
    console.log(fullName); // Output: John Doe
    ```

#### Task 2: Changing Variable Values
1. **Objective**: Understand how to reassign values to variables.
2. **Instructions**:
    - Declare a variable `age` and assign it your age.
    - Print `age` to the console.
    - Change the value of `age` to a new number.
    - Print the new value of `age` to the console.
3. **Example**:
    ```javascript
    let age = 20;
    console.log(age); // Output: 20
    age = 21;
    console.log(age); // Output: 21
    ```

#### Task 3: Using `const` for Constants
1. **Objective**: Learn how to declare constants with `const`.
2. **Instructions**:
    - Declare a constant variable `birthYear` and assign it your birth year.
    - Print `birthYear` to the console.
    - Try changing the value of `birthYear` and observe what happens.
3. **Example**:
    ```javascript
    const birthYear = 2000;
    console.log(birthYear); // Output: 2000
    // birthYear = 1999; // This will cause an error
    ```

#### Task 4: Simple Arithmetic Operations
1. **Objective**: Practice basic arithmetic operations with variables.
2. **Instructions**:
    - Declare two variables `num1` and `num2` and assign them any two numbers.
    - Calculate the sum, difference, product, and quotient of `num1` and `num2`.
    - Print the results to the console.
3. **Example**:
    ```javascript
    let num1 = 10;
    let num2 = 5;
    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let quotient = num1 / num2;
    console.log("Sum: " + sum); // Output: Sum: 15
    console.log("Difference: " + difference); // Output: Difference: 5
    console.log("Product: " + product); // Output: Product: 50
    console.log("Quotient: " + quotient); // Output: Quotient: 2
    ```

#### Task 5: Basic Interaction with Prompt
1. **Objective**: Learn how to take input from the user using `prompt()`.
2. **Instructions**:
    - Prompt the user to enter their name and store it in a variable `userName`.
    - Print a greeting message to the console that includes the user's name.
3. **Example**:
    ```javascript
    let userName = prompt("What is your name?");
    console.log("Hello, " + userName + "!");
    ```

#### Task 6: Boolean Logic
1. **Objective**: Understand how to use Boolean values and logical operators.
2. **Instructions**:
    - Declare two variables `isSunny` and `isRaining` and assign them boolean values.
    - Create a variable `isWeatherGood` that is `true` if it is sunny and not raining.
    - Print the value of `isWeatherGood` to the console.
3. **Example**:
    ```javascript
    let isSunny = true;
    let isRaining = false;
    let isWeatherGood = isSunny && !isRaining;
    console.log("Is the weather good? " + isWeatherGood); // Output: Is the weather good? true
    ```

