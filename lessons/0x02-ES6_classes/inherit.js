
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    made_sound () {
        return `The sound ${this.name} makes is ${this.sound} `;
    }
}

const dog = new Animal("Dog", "Woof woof");
console.log(dog.made_sound());

const cat = new Animal("Cat", "Meow Meow");
console.log(cat.made_sound());


class Dog extends Animal {
    constructor(name, sound) {
        super(name, sound)
    }

    made_sound() {
        return `The sound that ${this.name} makes is ${this.sound}`
    }
}

const d = new Dog("Dog", "Woof woof")
console.log(d.made_sound())