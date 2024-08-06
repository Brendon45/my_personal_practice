
### `if` Statement:

The `if` statement is used to execute a block of code only if a specified condition evaluates to `true`.

**Syntax:**
```javascript
if (condition) {
  // Code to be executed if the condition is true
}
```

**Example:**
```javascript
let temperature = 25;

if (temperature > 30) {
  console.log("It's a hot day!");
}
```

### `if...else` Statement:

The `if...else` statement allows you to execute one block of code if the condition is `true` and another block if the condition is `false`.

**Syntax:**
```javascript
if (condition) {
  // Code to be executed if the condition is true
} else {
  // Code to be executed if the condition is false
}
```

**Example:**
```javascript
let hour = 14;

if (hour < 12) {
  console.log("Good morning!");
} else {
  console.log("Good afternoon!");
}
```

### `if...else if...else` Statement:

You can extend the `if...else` statement with multiple conditions using `else if`.

**Syntax:**
```javascript
if (condition1) {
  // Code to be executed if condition1 is true
} else if (condition2) {
  // Code to be executed if condition2 is true
} else {
  // Code to be executed if none of the conditions are true
}
```

**Example:**
```javascript
let grade = 75;

if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else {
  console.log("Fail");
}
```

### Nesting `if` Statements:

You can also nest `if` statements inside each other to create more complex logic.

**Example:**
```javascript
let x = 10;
let y = 5;

if (x > 0) {
  if (y > 0) {
    console.log("Both x and y are positive.");
  } else {
    console.log("x is positive, but y is not.");
  }
} else {
  console.log("x is not positive.");
}
```

Understanding these conditional statements is fundamental for controlling the flow of your code based on different conditions. They are powerful tools for making decisions in your JavaScript programs.