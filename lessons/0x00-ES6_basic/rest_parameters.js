// Description: Rest parameters allow you to represent an indefinite number of arguments as an array.
const sum = (...numbers) => {
    return numbers.reduce((acc, num) => acc + num, 0); // 0 is the initial value of acc
  };
  
console.log(sum(1, 2, 3, 4, 5)); // 15

// spread syntax
const numbers = [1, 2, 3, 4, 5];
console.log(sum(...numbers)); // 15

// Rest parameters are used to create functions that accept any number of arguments.
const multiply = (...numbers) => {
    return numbers.reduce((acc, num) => acc * num, 1);
}

console.log(multiply(1, 2, 3, 4, 5)); // 120
