### Understanding Variable Scope in JavaScript:

#### What is Variable Scope?

Variable scope in JavaScript refers to the region of the code where a variable can be accessed. The two main types of variable scope are:

1. **Global Scope:**
   - A variable declared outside any function has global scope.
   - It can be accessed from any part of the code, including inside functions.

   ```javascript
   const globalVar = 'I am global';

   function exampleFunction() {
     console.log(globalVar);
   }

   exampleFunction();  // Output: I am global
   ```

2. **Local Scope:**
   - A variable declared inside a function has local scope.
   - It can only be accessed within that specific function.

   ```javascript
   function exampleFunction() {
     const localVar = 'I am local';
     console.log(localVar);
   }

   exampleFunction();  // Output: I am local

   // Trying to access localVar outside the function will result in an error.
   ```

#### Block Scope:

Introduced in ES6, `let` and `const` have block scope. Block scope means that the variable is only accessible within the block of code where it's defined. A block is denoted by a pair of curly braces `{}`.

```javascript
if (true) {
  let blockVar = 'I am in a block';
  console.log(blockVar);
}

// Trying to access blockVar here will result in an error.
```

#### Scope Hierarchy:

JavaScript follows a hierarchy for variable resolution. If a variable is not found in the local scope, the interpreter looks for it in the next outer scope until it reaches the global scope.

```javascript
const globalVar = 'I am global';

function outerFunction() {
  const outerVar = 'I am in outer function';

  function innerFunction() {
    const innerVar = 'I am in inner function';
    console.log(innerVar);   // Output: I am in inner function
    console.log(outerVar);   // Output: I am in outer function
    console.log(globalVar);  // Output: I am global
  }

  innerFunction();
}

outerFunction();
```

variable scope helps prevent unintended variable collisions and ensures that each part of your program operates within its intended context.