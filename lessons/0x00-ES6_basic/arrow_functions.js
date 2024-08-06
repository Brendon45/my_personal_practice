// concise syntax for writing function expressions

let a = 10;
let b = 20;

const add = (a, b) => a + b;

console.log(add(a, b)); // 30

// block body syntax
const subtract = (a, b) => {
    return a - b;
}

console.log(subtract(a, b)); // -10