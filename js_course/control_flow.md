### Module 4: Control Flow in JavaScript

#### 4.1 What is Control Flow?
- **Definition**: Control flow refers to the order in which individual statements, instructions, or function calls are executed or evaluated in a program. JavaScript provides several control structures that allow developers to manage the flow of their programs.

#### 4.2 Conditionals
Conditionals allow you to perform different actions based on different conditions.

1. **if Statement**:
    ```javascript
    let age = 18;
    if (age >= 18) {
      console.log("You are an adult.");
    }
    // Output: You are an adult.
    ```

2. **if...else Statement**:
    ```javascript
    let age = 16;
    if (age >= 18) {
      console.log("You are an adult.");
    } else {
      console.log("You are a minor.");
    }
    // Output: You are a minor.
    ```

3. **else if Statement**:
    ```javascript
    let score = 85;
    if (score >= 90) {
      console.log("Grade: A");
    } else if (score >= 80) {
      console.log("Grade: B");
    } else if (score >= 70) {
      console.log("Grade: C");
    } else {
      console.log("Grade: F");
    }
    // Output: Grade: B
    ```

4. **Switch Statement**:
    ```javascript
    let day = 3;
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
        console.log("Invalid day");
    }
    // Output: Wednesday
    ```

#### 4.3 Loops
Loops allow you to repeat a block of code multiple times.

1. **for Loop**:
    ```javascript
    for (let i = 0; i < 5; i++) {
      console.log("Iteration: " + i);
    }
    // Output: Iteration: 0
    // Output: Iteration: 1
    // Output: Iteration: 2
    // Output: Iteration: 3
    // Output: Iteration: 4
    ```

2. **while Loop**:
    ```javascript
    let i = 0;
    while (i < 5) {
      console.log("Iteration: " + i);
      i++;
    }
    // Output: Iteration: 0
    // Output: Iteration: 1
    // Output: Iteration: 2
    // Output: Iteration: 3
    // Output: Iteration: 4
    ```

3. **do...while Loop**:
    ```javascript
    let i = 0;
    do {
      console.log("Iteration: " + i);
      i++;
    } while (i < 5);
    // Output: Iteration: 0
    // Output: Iteration: 1
    // Output: Iteration: 2
    // Output: Iteration: 3
    // Output: Iteration: 4
    ```

4. **for...in Loop**: Used to iterate over the properties of an object.
    ```javascript
    let person = {name: "John", age: 30, city: "New York"};
    for (let key in person) {
      console.log(key + ": " + person[key]);
    }
    // Output: name: John
    // Output: age: 30
    // Output: city: New York
    ```

5. **for...of Loop**: Used to iterate over iterable objects like arrays.
    ```javascript
    let numbers = [10, 20, 30];
    for (let number of numbers) {
      console.log(number);
    }
    // Output: 10
    // Output: 20
    // Output: 30
    ```

#### 4.4 Break and Continue
These statements alter the flow of a loop.

1. **break Statement**: Exits the loop immediately.
    ```javascript
    for (let i = 0; i < 10; i++) {
      if (i === 5) {
        break;
      }
      console.log("Iteration: " + i);
    }
    // Output: Iteration: 0
    // Output: Iteration: 1
    // Output: Iteration: 2
    // Output: Iteration: 3
    // Output: Iteration: 4
    ```

2. **continue Statement**: Skips the current iteration and proceeds to the next one.
    ```javascript
    for (let i = 0; i < 10; i++) {
      if (i === 5) {
        continue;
      }
      console.log("Iteration: " + i);
    }
    // Output: Iteration: 0
    // Output: Iteration: 1
    // Output: Iteration: 2
    // Output: Iteration: 3
    // Output: Iteration: 4
    // Output: Iteration: 6
    // Output: Iteration: 7
    // Output: Iteration: 8
    // Output: Iteration: 9
    ```

### Conclusion
- **Recap**: We covered various control flow structures, including conditionals (`if`, `else if`, `else`, `switch`), loops (`for`, `while`, `do...while`, `for...in`, `for...of`), and how to use `break` and `continue` to control loop execution.
- **Next Module Preview**: In the next module, we'll delve into functions, how to define and call them, and why they are essential in JavaScript.

Understanding control flow is crucial for managing the logic of your programs, allowing you to make decisions and repeat actions efficiently.