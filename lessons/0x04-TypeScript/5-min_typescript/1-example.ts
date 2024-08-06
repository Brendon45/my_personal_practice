interface User {
    name: string,
    age: number,
    id: number,
    isStudent: boolean
};

// create an object called user1
const user1: User = {
    name : "Cobby",
    id: 0,
    age: 21,
    isStudent: true
};

console.log(user1);
console.log(typeof(user1));
