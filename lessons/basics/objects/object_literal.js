

const person = {
    name: ["Cobby", "Kelvin"],
    age: 21,
    bio : function() {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`)
    },
    greet: function() {
        console.log(`Hello ${this.name[0]}, welcome here`);
    }
}

person.bio()
person.greet()