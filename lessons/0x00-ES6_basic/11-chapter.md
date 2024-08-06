Chapter 7: Iterators and for-of Loops

Iterators and the `for-of` loop are powerful constructs introduced in ECMAScript 6 (ES6) for iterating over collections such as arrays, strings, and other iterable objects.

1. **Iterators**:
   - Iterators are objects that provide a way to iterate over the elements of a collection one at a time.
   - They have a `next()` method that returns an object with two properties: `value`, which represents the current element, and `done`, which indicates whether the iteration is complete.
   - Example:
     ```javascript
     const iterable = [1, 2, 3];
     const iterator = iterable[Symbol.iterator]();
     console.log(iterator.next()); // Output: { value: 1, done: false }
     console.log(iterator.next()); // Output: { value: 2, done: false }
     console.log(iterator.next()); // Output: { value: 3, done: false }
     console.log(iterator.next()); // Output: { value: undefined, done: true }
     ```

2. **for-of Loop**:
   - The `for-of` loop provides a convenient syntax for iterating over iterable objects.
   - It iterates over the values of an iterable, rather than the indices.
   - Example:
     ```javascript
     const iterable = [1, 2, 3];
     for (const value of iterable) {
       console.log(value);
     }
     // Output:
     // 1
     // 2
     // 3
     ```

3. **Iterating Strings**:
   - Strings are also iterable objects in JavaScript, allowing you to iterate over their characters using iterators or the `for-of` loop.
   - Example:
     ```javascript
     const str = 'hello';
     for (const char of str) {
       console.log(char);
     }
     // Output:
     // 'h'
     // 'e'
     // 'l'
     // 'l'
     // 'o'
     ```

Iterators and the `for-of` loop provide a standardized way to iterate over collections in JavaScript, improving code readability and expressiveness. They are widely used in modern JavaScript code for iterating over arrays, strings, and other iterable objects...