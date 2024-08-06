### Understanding Functions in JavaScript:

#### What is a Function?

In JavaScript, a function is a reusable block of code that performs a specific task. It helps organize code, promote reusability, and allows you to call the same set of instructions multiple times.

#### How to Use Functions:

**Function Declaration:**
```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('Cobby');  // Output: Hello, Cobby!
```

**Function Expression:**
```javascript
const add = function(a, b) {
  return a + b;
};

const result = add(3, 7);
console.log(result);  // Output: 10
```

**Arrow Function:**
```javascript
const multiply = (x, y) => x * y;

const product = multiply(4, 5);
console.log(product);  // Output: 20
```

#### Return Statement:

A function in JavaScript can use the `return` statement to send a value back to the code that called the function.

```javascript
function square(x) {
  return x * x;
}

const squaredValue = square(3);
console.log(squaredValue);  // Output: 9
```

#### Function Without a Return Statement:

If a function doesn't explicitly use a `return` statement, it implicitly returns `undefined`.

```javascript
function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

const result = sayHello('John');
console.log(result);  // Output: Hello, John! \n undefined
```

In this example, `sayHello` logs a greeting but doesn't return a value. When you assign the result of calling `sayHello` to a variable, it receives `undefined`.

Understanding functions is crucial as they play a fundamental role in structuring JavaScript code, promoting modularity, and facilitating code reuse. Knowing when and how to use the `return` statement is essential for leveraging the results of function calls in your programs.