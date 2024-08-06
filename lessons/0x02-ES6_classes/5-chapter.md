Private properties in JavaScript classes are declared using the `#` symbol preceding the property name. These private fields can only be accessed and modified within the class body, making them inaccessible from outside the class.

### Example: Private Properties

```javascript
class Rectangle {
  #height = 0; // Private field with default value
  #width; // Private field without default value

  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
}
```

In this example, the `Rectangle` class declares private fields `#height` and `#width`. These fields can only be accessed and modified within the class methods, ensuring encapsulation and preventing external access or modification.

### Usage Guidelines

1. **Encapsulation**:
   - Private properties ensure encapsulation by restricting access to internal class details.
   - Users of the class cannot depend on private properties, as they are hidden from external code.

2. **Error Prevention**:
   - Attempting to reference private fields from outside the class results in an error, preventing accidental access or modification.

3. **Declaration Constraints**:
   - Private fields must be declared upfront in a field declaration and cannot be created later by assigning to them.

Private properties in JavaScript classes enhance code maintainability and prevent unintended dependencies on internal class details. By hiding implementation details, private properties promote cleaner and more robust class designs.