Inheritance in JavaScript classes allows one class to inherit properties and methods from another class. The `extends` keyword is used to create a child class that inherits from a parent class.

### Example: Basic Inheritance

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // Call the superclass constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const d = new Dog("Mitzie");
d.speak(); // Output: Mitzie barks.
```

In this example, the `Dog` class extends the `Animal` class, inheriting its properties and methods. The `super(name)` call in the `Dog` constructor calls the constructor of the `Animal` class with the provided `name` parameter.

### Example: Calling Superclass Methods

```javascript
class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Lion extends Cat {
  speak() {
    super.speak(); // Call the speak method of the superclass
    console.log(`${this.name} roars.`);
  }
}

const l = new Lion("Fuzzy");
l.speak();
// Output:
// Fuzzy makes a noise.
// Fuzzy roars.
```

In this example, the `Lion` class extends the `Cat` class. Inside the `speak` method of `Lion`, `super.speak()` is used to call the `speak` method of the superclass (`Cat`), allowing both the superclass and subclass methods to be executed.

Understanding inheritance in JavaScript classes is like understanding how traits and characteristics are passed down from parents to children. The child class inherits properties and behaviors from the parent class, while also having the flexibility to define its own unique features.