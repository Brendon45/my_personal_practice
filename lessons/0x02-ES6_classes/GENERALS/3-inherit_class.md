Extending a class from another in JavaScript allows you to create a new class (subclass) that inherits properties and methods from an existing class (superclass). This process is achieved using the `extends` keyword. Here's how to extend a class from another:

### Syntax:

```javascript
class Subclass extends Superclass {
  // Subclass-specific members
}
```

### Example:

```javascript
// Superclass
class Animal {
  constructor(name) {
    this.name = name;
  }

  // Instance method
  speak() {
    return `${this.name} makes a noise.`;
  }
}

// Subclass extends Superclass
class Dog extends Animal {
  // Subclass-specific constructor
  constructor(name, breed) {
    // Call the superclass constructor using super()
    super(name);
    this.breed = breed;
  }

  // Subclass-specific instance method
  speak() {
    return `${this.name} barks.`;
  }
}

// Create an instance of Subclass
const myDog = new Dog('Buddy', 'Labrador');

// Call Subclass-specific method
console.log(myDog.speak()); // Output: "Buddy barks."

// Call superclass method inherited by Subclass
console.log(myDog.name); // Output: "Buddy"
```

In this example:
- `Animal` is the superclass, and `Dog` is the subclass.
- `Dog` extends `Animal` using the `extends` keyword.
- The `super()` method is used inside the constructor of the subclass to call the constructor of the superclass and pass arguments.
- The subclass can override methods from the superclass to provide specific behavior.
- The subclass inherits all properties and methods from the superclass, and it can also define its own specific members.