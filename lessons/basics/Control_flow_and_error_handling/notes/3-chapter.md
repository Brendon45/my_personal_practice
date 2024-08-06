The `switch` statement in JavaScript allows you to evaluate an expression and execute code based on different cases. Here's a breakdown of the `switch` statement:

### switch Statement:

**Syntax:**
```javascript
switch (expression) {
  case label1:
    statements1;
    break;
  case label2:
    statements2;
    break;
  // ...
  default:
    statementsDefault;
}
```

- `expression`: The value to be evaluated.
- `label1`, `label2`, ...: Case labels to match against the `expression`.
- `statements1`, `statements2`, ...: Code to be executed if a matching case is found.
- `default`: Optional. Code to be executed if no matching case is found.

**Example:**
```javascript
let fruitType = "Bananas";

switch (fruitType) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  // ... other cases ...
  default:
    console.log(`Sorry, we are out of ${fruitType}.`);
}

console.log("Is there anything else you'd like?");
```

- The `switch` statement evaluates `fruitType`.
- If it matches a `case` label (e.g., "Bananas"), the associated statements are executed.
- The `break` statement ensures that once a case is matched, the program exits the `switch`.
- If no match is found, the `default` case (if present) is executed.

**Note:**
- Omitting the `break` statement allows the program to fall through to the next case, executing its statements. Use it carefully, as it may lead to unexpected behavior.

`switch` statements are useful for handling multiple conditions based on the value of an expression.