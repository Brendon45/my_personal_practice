
// syntax for writing string templates
const name = 'John';
const age = 30;
const greet = `My name is ${name} and I am ${age} years old.`;

console.log(greet); // My name is John and I am 30 years old.

// Template literals are enclosed by the back-tick (` `) (grave accent) character instead of double or single quotes.
// Template literals can contain placeholders, indicated by the dollar sign and curly braces (${expression}).
// The expression inside the placeholder is evaluated and the result is inserted into the string.
// Template literals can span multiple lines without the need for escape characters.

// mutiline string

const multiline = `
This is a
multiline
string
`;

console.log(multiline);

// expression interpolation 

const a = 10;
const b = 20;

const result = `The sum of ${a} and ${b} is ${a + b}`;

console.log(result); // The sum of 10 and 20 is 30


// tagged templates 

function currency(strings, ...values) {
    const result = [];
    strings.forEach((str, i) => {
      result.push(str);
      if (i < values.length) {
        result.push(values[i]);
      }
    });
    return result.join('');
}

const amount = 100;
const currencyType = 'USD';
const message = currency`You have ${amount} ${currencyType}`;

console.log(message); // You have 100 in USD