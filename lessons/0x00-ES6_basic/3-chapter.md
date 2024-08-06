here's a tabulated summary of the differences between `var`, `let`, and `const`:

| Feature          | var            | let            | const          |
|------------------|----------------|----------------|----------------|
| Scope            | Function scope | Block scope    | Block scope    |
| Redeclare        | Yes            | Yes            | No             |
| Reassign         | Yes            | No             | No             |
| Hoisted          | Yes            | Yes            | No             |
| Binds `this`     | Yes            | No             | No             |

And here are some points on what's good about `let` and `const`:

- `let` and `const` have block scope.
- `let` and `const` cannot be redeclared.
- `let` and `const` must be declared before use.
- `let` and `const` do not bind to `this`.
- `let` and `const` are not hoisted.