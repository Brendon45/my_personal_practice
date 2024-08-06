
const foo = 42; // foo is a number
let result = foo + "2"; // JavaScript coerces foo to a string, so it can be concatenated with the other operand
console.log(result); // 421

type = typeof(result)
console.log(type)


const numberAsString = "42";
result = numberAsString * 1; // JavaScript coerces the string to a number for the multiplication
console.log(result); // Outputs: 42


const string = "str";
result = string * 1; // JavaScript coerces the string to a number for the multiplication
console.log(result); // Outputs: NaN
