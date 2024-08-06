Adding methods to a class in JavaScript is straightforward. You define methods within the class body using regular function syntax. These methods can then be invoked on instances of the class. Here's how to add methods to a class:

### 1. Instance Methods:

Instance methods are functions that are accessible on each instance of the class. They are defined without the `static` keyword within the class body.

```javascript
class MyClass {
  // Constructor
  constructor(param) {
    this.param = param;
  }

  // Instance method
  myMethod() {
    // Method logic
    return this.param;
  }
}
```

In this example, `myMethod` is an instance method that returns the value of the `param` property for the instance.

### 2. Static Methods:

Static methods are functions that are associated with the class itself, rather than with instances of the class. They are defined using the `static` keyword within the class body.

```javascript
class MyClass {
  // Static method
  static myStaticMethod() {
    // Static method logic
    return 'This is a static method';
  }
}
```

In this example, `myStaticMethod` is a static method that returns a string.

### Example:

```javascript
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Instance method to calculate area
  calculateArea() {
    return Math.PI * this.radius ** 2;
  }

  // Static method to return the circumference of a circle
  static calculateCircumference(radius) {
    return 2 * Math.PI * radius;
  }
}

// Create an instance of Circle
const myCircle = new Circle(5);

// Call instance method to calculate area
console.log(myCircle.calculateArea()); // Output: 78.53981633974483

// Call static method to calculate circumference
console.log(Circle.calculateCircumference(5)); // Output: 31.41592653589793
```

In this example, `calculateArea` is an instance method that calculates the area of a circle, while `calculateCircumference` is a static method that calculates the circumference of a circle.


The main difference between an instance method and a static method lies in how they are accessed and their relationship to class instances:

1. **Instance Method**:
   - An instance method operates on an instance of the class.
   - It has access to the instance's properties and can modify them.
   - It is invoked on instances of the class.
   - Instance methods are defined without the `static` keyword inside the class body.

2. **Static Method**:
   - A static method is associated with the class itself rather than with instances of the class.
   - It does not have access to instance properties and cannot modify them directly.
   - It is invoked on the class itself, not on instances of the class.
   - Static methods are defined with the `static` keyword inside the class body.

### When to Use Which:

1. **Instance Method**:
   - Use instance methods when the logic you're implementing is specific to individual instances of the class.
   - Instance methods often manipulate or interact with instance-specific data.
   - For example, a method to calculate the area of a shape or to format a specific instance's data would be implemented as an instance method.

2. **Static Method**:
   - Use static methods when the logic you're implementing is independent of any particular instance of the class.
   - Static methods are often used for utility functions or operations that do not require access to instance-specific data.
   - For example, a method to validate input data, to perform calculations that don't depend on instance state, or to create instances of the class would be implemented as static methods.

### Example:

```javascript
class MathUtils {
  // Static method to calculate the square of a number
  static square(x) {
    return x * x;
  }

  // Instance method to calculate the area of a circle
  static calculateCircleArea(radius) {
    return Math.PI * this.square(radius);
  }
}

// Using static method
console.log(MathUtils.square(5)); // Output: 25

// Using instance method
console.log(MathUtils.calculateCircleArea(5)); // Output: 78.53981633974483
```

In this example, `square` is a static method of the `MathUtils` class, while `calculateCircleArea` is a static method that internally calls the `square` static method. They demonstrate how static methods can be used for general utility operations, while instance methods can be used for instance-specific logic.