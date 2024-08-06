Chapter 5: String Templating in ES6

String templating, also known as template literals, is a feature introduced in ECMAScript 6 (ES6) that provides a convenient and expressive way to create strings in JavaScript.

1. **Syntax**:
   - Template literals are enclosed in backticks (\`\`) instead of single or double quotes.
   - You can embed expressions or variables directly into the string using `${}`.
   - Example:
     ```javascript
     const name = 'John';
     const greeting = `Hello, ${name}!`;
     console.log(greeting); // Output: Hello, John!
     ```

2. **Multiline Strings**:
   - Template literals allow multiline strings without needing to use escape characters like `\n`.
   - Simply write the string content across multiple lines within the backticks.
   - Example:
     ```javascript
     const multiline = `
       This is a multiline
       string using template literals.
     `;
     ```

3. **Expression Interpolation**:
   - Inside `${}`, you can include any valid JavaScript expression, including function calls and arithmetic operations.
   - Example:
     ```javascript
     const a = 10;
     const b = 20;
     const result = `The sum of ${a} and ${b} is ${a + b}.`;
     ```

4. **Tagged Templates**:
   - Tagged templates allow you to customize the behavior of template literals by prefixing them with a function name (a "tag").
   - The tag function receives the string parts and interpolated values as arguments and can process or modify them before returning the final string.
   - Example:
     ```javascript
     function currency(strings, ...values) {
       const result = [];
       strings.forEach((string, i) => {
         result.push(string);
         if (values[i]) {
           result.push(values[i]);
         }
       });
       return result.join('');
     }
     const amount = 100;
     const currencyType = 'USD';
     const message = currency`You have ${amount} ${currencyType}.`;
     ```

String templating in ES6 provides a cleaner and more readable way to create strings, especially when working with dynamic content or multiline strings. It enhances code readability and reduces the need for manual string concatenation or escaping.