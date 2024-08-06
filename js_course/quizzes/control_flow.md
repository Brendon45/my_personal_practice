### Module 4: Control Flow in JavaScript - Quizzes

#### Quiz 1: Conditionals
1. **What will the following code output?**
    ```javascript
    let score = 75;
    if (score > 90) {
      console.log("Excellent");
    } else if (score > 70) {
      console.log("Good");
    } else {
      console.log("Needs Improvement");
    }
    ```
    - a) Excellent
    - b) Good
    - c) Needs Improvement
    - d) Error

2. **What is the correct syntax for an `if...else` statement?**
    - a) `if (condition) { // code } else if { // code }`
    - b) `if (condition) // code else // code`
    - c) `if (condition) { // code } else { // code }`
    - d) `if (condition) { // code } elseif (condition) { // code }`

3. **Which statement will check if a variable `num` is not equal to 10?**
    - a) `if (num = 10)`
    - b) `if (num != 10)`
    - c) `if (num !== 10)`
    - d) Both b and c

#### Quiz 2: Loops
1. **What will the following code output?**
    ```javascript
    for (let i = 0; i < 3; i++) {
      console.log(i);
    }
    ```
    - a) 1, 2, 3
    - b) 0, 1, 2
    - c) 1, 2
    - d) 0, 1, 2, 3

2. **What is the difference between a `while` loop and a `do...while` loop?**
    - a) `while` loop executes at least once, `do...while` loop may not execute at all.
    - b) `do...while` loop executes at least once, `while` loop may not execute at all.
    - c) There is no difference.
    - d) Both loops are the same but used in different contexts.

3. **Which loop is used to iterate over the properties of an object?**
    - a) `for` loop
    - b) `while` loop
    - c) `for...in` loop
    - d) `for...of` loop

#### Quiz 3: Control Flow
1. **What will the following code output?**
    ```javascript
    let x = 10;
    while (x > 0) {
      x -= 3;
    }
    console.log(x);
    ```
    - a) 0
    - b) -1
    - c) -2
    - d) -3

2. **Which of the following will break out of a loop immediately?**
    - a) `continue`
    - b) `break`
    - c) `return`
    - d) `exit`

3. **What is the purpose of the `continue` statement in a loop?**
    - a) To exit the loop
    - b) To skip the rest of the loop iteration and proceed to the next iteration
    - c) To restart the loop from the beginning
    - d) To end the loop immediately

#### Quiz 4: Mixed Questions
1. **What will the following code output?**
    ```javascript
    let fruits = ["apple", "banana", "cherry"];
    for (let fruit of fruits) {
      if (fruit === "banana") {
        break;
      }
      console.log(fruit);
    }
    ```
    - a) apple
    - b) apple, banana
    - c) apple, banana, cherry
    - d) banana, cherry

2. **What will the following code output?**
    ```javascript
    let sum = 0;
    for (let i = 1; i <= 5; i++) {
      sum += i;
      if (i === 3) {
        continue;
      }
      sum += 1;
    }
    console.log(sum);
    ```
    - a) 15
    - b) 16
    - c) 17
    - d) 18

3. **What will the following code output?**
    ```javascript
    let num = 10;
    switch (num) {
      case 5:
        console.log("Five");
        break;
      case 10:
        console.log("Ten");
        break;
      default:
        console.log("Unknown");
    }
    ```
    - a) Five
    - b) Ten
    - c) Unknown
    - d) Error
