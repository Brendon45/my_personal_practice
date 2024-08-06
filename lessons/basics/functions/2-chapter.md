

### What are Functions?

Think of functions as mini-programs that perform specific tasks. Instead of writing the same code over and over, you can create a function to do it once and then use that function whenever you need to perform that task.

### Basic Structure:

In JavaScript, a function looks like this:

```javascript
function functionName() {
  // Code to be executed
}
```

- `function`: This keyword tells JavaScript that you're about to create a function.
- `functionName`: Replace this with a name that describes what your function does.
- `()` and `{}`: These are parentheses and curly braces. The code you want your function to run goes inside the curly braces.

### How to Use Functions:

Once you've defined a function, you can use it by calling its name, followed by parentheses. For example:

```javascript
functionName();
```

This tells JavaScript to run the code inside the `functionName` function.

### Functions in Action:

You've actually been using functions without explicitly knowing it. For instance, when you used `replace` to change a word in a string:

```javascript
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
console.log(newString);
```

Here, `replace` is a built-in function provided by JavaScript. It takes two arguments (the word to be replaced and the new word) and returns a new string.

### Built-in Browser Functions:

JavaScript comes with many pre-built functions that you can use. For example, when you generate a random number:

```javascript
const myNumber = Math.random();
```

`Math.random()` is another built-in function. It generates a random number between 0 and almost 1.

### Takeaways:

- **Functions are like mini-programs**: They group code for a specific task.
- **Basic structure**: `function functionName() { /* Code */ }`
- **Using functions**: Call them by name followed by parentheses: `functionName();`
- **Built-in functions**: JavaScript provides many functions, and you've been using them already.

