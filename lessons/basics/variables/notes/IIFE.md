An Immediately Invoked Function Expression (IIFE) is a JavaScript function that is executed immediately after it's defined. It is a design pattern that involves wrapping a function in parentheses and then immediately invoking it.

Here's a basic structure of an IIFE:

```javascript
(function() {
    // code here
})();
```

Key features and uses of IIFE:

1. **Encapsulation:** An IIFE creates a new scope for the enclosed code. This helps in preventing variable name conflicts with the global scope and encapsulating variables within the function, avoiding polluting the global namespace.

   ```javascript
   (function() {
       var localVar = "I am local";
       // localVar is not accessible outside this function
   })();
   ```

2. **Avoiding Global Pollution:** By encapsulating code within an IIFE, you avoid adding variables or functions to the global scope, reducing the risk of naming collisions in large codebases.

   ```javascript
   (function() {
       var internalVar = "I am internal";
       // internalVar is not in the global scope
   })();
   ```

3. **Module Pattern:** IIFE is often used as part of the module pattern, allowing you to create private and public members within a module.

   ```javascript
   var myModule = (function() {
       var privateVar = "I am private";

       return {
           publicVar: "I am public",
           getPrivateVar: function() {
               return privateVar;
           }
       };
   })();

   console.log(myModule.publicVar); // Accessing the public variable
   console.log(myModule.getPrivateVar()); // Accessing a method that can retrieve private variable
   ```

4. **Data Privacy:** Variables declared inside an IIFE are not accessible from the outside, providing a way to achieve a level of data privacy.

   ```javascript
   var counter = (function() {
       var count = 0;

       return {
           increment: function() {
               count++;
           },
           getCount: function() {
               return count;
           }
       };
   })();

   counter.increment();
   console.log(counter.getCount()); // Outputs: 1
   ```

IIFE is a useful pattern for creating isolated and modular code, especially in scenarios where you want to control the scope of variables and prevent unintended interactions with other parts of your code.