Let's explore static methods and fields in JavaScript classes, understanding their purpose and how they differ from instance methods and properties.

### Static Methods and Fields

1. **Static Keyword**:
   - The `static` keyword is used to define a static method or field for a class.
   - Static properties (fields and methods) are defined on the class itself, rather than on each instance of the class.

2. **Purpose**:
   - Static methods are often used to create utility functions for an application, whereas static fields are useful for caches, fixed configurations, or any other data that doesn't need to be replicated across instances.

### Example: Static Method

```javascript
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Point"; // Static field

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.displayName); // Output: "Point"
console.log(Point.distance(p1, p2)); // Output: 7.0710678118654755
```

In this example, the `Point` class defines a static method `distance` to calculate the distance between two points. The `displayName` is a static field that holds the name of the class.

### Example: Field Declarations

```javascript
class Rectangle {
  height = 0; // Class field with default value
  width; // Class field without default value

  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

In this example, the `Rectangle` class declares class fields `height` and `width`. The `height` field has a default value of `0`, while the `width` field does not have a default value and defaults to `undefined`.

Understanding static methods and fields in JavaScript classes is like understanding global utility functions and shared data that are accessible across instances of a class. Static methods provide functionality that is independent of any particular instance, while static fields hold data that is common to all instances of the class. These features contribute to the versatility and efficiency of class definitions in JavaScript.