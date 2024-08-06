// iterators
const iterable = [1 , 2, 3 , 4, 5];
const iterator = iterable[Symbol.iterator]();
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// for...of loop
for (const value of iterable) {
  console.log(value);
}


// Description: Iterators are objects that implement the iterator protocol.
// The iterator protocol defines a standard way to produce a sequence of values.
// An object is an iterator when it implements the next() method.
// The next() method returns an object with two properties: value and done.
// The value property contains the next value in the sequence.
// The done property is a boolean that indicates if the iterator has reached the end of the sequence.
// The for...of loop is used to iterate over the values of an iterable object.
// The for...of loop automatically calls the next() method on the iterator object.
// The loop terminates when the done property is true.
// The for...of loop works with any object that is iterable.


//iterating strings
const str = 'hello';
for (const char of str) {
  console.log(char);
}

// Description: Strings are iterable objects.
// You can use the for...of loop to iterate over the characters of a string.
// The for...of loop automatically calls the next() method on the string object.
// The loop terminates when the done property is true.
// The for...of loop works with any object that is iterable.
