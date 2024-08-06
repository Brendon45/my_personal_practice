In the code snippet, both variables are named `x`, but they are declared using different keywords: `const` and `let`. The major difference between `const` and `let` lies in their behavior regarding reassignment and scope:

1. **const**: When you declare a variable using `const`, you're indicating that the variable will hold a constant value that cannot be reassigned. However, this does not mean that the value itself is immutable. For example, if you declare `const x = 10;`, you cannot later do `x = 20;` to change the value of `x`. However, if `x` holds a mutable value like an object or array, you can still modify the properties or elements of that object or array.

2. **let**: Variables declared with `let` are mutable and can be reassigned within their block scope. In the code snippet you provided, the `let x = 2;` declaration creates a new variable `x` within the inner block scope, which shadows the outer variable `x` declared with `const`. This means that within the inner block, the `x` variable refers to the one declared with `let`, while outside of that block, the `x` variable refers to the one declared with `const`.

In summary, the major difference between `const` and `let` is that `const` creates a variable whose value cannot be reassigned, while `let` creates a mutable variable that can be reassigned within its block scope.

```js
var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10
```