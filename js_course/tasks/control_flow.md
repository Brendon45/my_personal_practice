### Module 4: Control Flow in JavaScript - Tasks

#### Task 1: Age Classification
Write a program that asks the user for their age and prints a message based on their input.
- If the age is 18 or older, print "You are an adult."
- If the age is less than 18, print "You are a minor."

**Instructions**:
1. Use `prompt()` to get the user's age.
2. Use an `if...else` statement to check the age and print the appropriate message.

**Example Output**:
```javascript
let age = prompt("Enter your age:");
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

#### Task 2: Day of the Week
Write a program that takes a number (1-7) from the user and prints the corresponding day of the week.
- 1 = Monday, 2 = Tuesday, ..., 7 = Sunday

**Instructions**:
1. Use `prompt()` to get the day number from the user.
2. Use a `switch` statement to print the corresponding day.

**Example Output**:
```javascript
let day = prompt("Enter a number (1-7):");
day = parseInt(day);
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid number");
}
```

#### Task 3: Sum of First N Natural Numbers
Write a program to calculate the sum of the first N natural numbers (N is provided by the user).

**Instructions**:
1. Use `prompt()` to get the number N.
2. Use a `for` loop to calculate the sum.
3. Print the sum.

**Example Output**:
```javascript
let N = prompt("Enter a number:");
N = parseInt(N);
let sum = 0;
for (let i = 1; i <= N; i++) {
  sum += i;
}
console.log("Sum of first " + N + " natural numbers is: " + sum);
```

#### Task 4: Even or Odd Numbers
Write a program that prints all even numbers from 1 to N (N is provided by the user).

**Instructions**:
1. Use `prompt()` to get the number N.
2. Use a `for` loop to iterate from 1 to N.
3. Use an `if` statement inside the loop to check if the number is even and print it.

**Example Output**:
```javascript
let N = prompt("Enter a number:");
N = parseInt(N);
for (let i = 1; i <= N; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
```

#### Task 5: Simple Calculator
Write a program that acts as a simple calculator. It should take two numbers and an operator from the user, then perform the corresponding operation (addition, subtraction, multiplication, or division) and print the result.

**Instructions**:
1. Use `prompt()` to get the two numbers and the operator from the user.
2. Use a `switch` statement to perform the corresponding operation based on the operator.

**Example Output**:
```javascript
let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let operator = prompt("Enter an operator (+, -, *, /):");
num1 = parseFloat(num1);
num2 = parseFloat(num2);
let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num1 / num2;
    break;
  default:
    result = "Invalid operator";
}

console.log("Result: " + result);
```

#### Task 6: Number Guessing Game
Write a simple number guessing game where the program randomly selects a number between 1 and 10, and the user has to guess it. Provide feedback if the guess is too high or too low.

**Instructions**:
1. Use `Math.random()` to generate a random number between 1 and 10.
2. Use a `while` loop to allow the user to keep guessing until they get it right.
3. Provide feedback using `if...else` statements.

**Example Output**:
```javascript
let randomNumber = Math.floor(Math.random() * 10) + 1;
let guess;
do {
  guess = prompt("Guess the number (between 1 and 10):");
  guess = parseInt(guess);
  if (guess > randomNumber) {
    console.log("Too high!");
  } else if (guess < randomNumber) {
    console.log("Too low!");
  } else {
    console.log("Correct! The number was " + randomNumber);
  }
} while (guess !== randomNumber);
```

