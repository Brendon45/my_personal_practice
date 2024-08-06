// Create an Int8Array view to handle 8-bit signed integers
const intArray = new Int8Array([1, 2, 3]);

// Accessing elements using bracket notation
console.log(intArray[0]); // Output: 1

// Attempting to access out-of-bounds indices
console.log(intArray[-1]); // Output: undefined
console.log(intArray[10]); // Output: undefined

// Attempting to modify out-of-bounds indices (no effect)
intArray[5] = 10; // No error, but no change to the array

// Creating a Uint16Array view to handle 16-bit unsigned integers
const uintArray = new Uint16Array(4); // Allocate space for 4 elements

// Setting multiple values at once using set method
uintArray.set([10, 20, 30], 1); // Set values starting from index 1

console.log(uintArray); // Output: Uint16Array [ 0, 10, 20, 30 ]

// Creating a subarray view to reference a portion of the original array
const subArray = uintArray.subarray(1, 3); // Reference elements from index 1 to 2

console.log(subArray); // Output: Uint16Array [ 10, 20 ]
