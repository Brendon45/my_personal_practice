In JavaScript, constructors are functions used to create and initialize objects. When a constructor is called with the `new` keyword, it creates a new object, binds `this` to that object, runs the code inside the constructor, and finally returns the new object. Constructors, by convention, start with a capital letter.

Here's an example of a constructor named `Person`:

```javascript
function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
}
```

You can create new objects using this constructor:

```javascript
const salva = new Person("Salva");
salva.name; // "Salva"
salva.introduceSelf(); // "Hi! I'm Salva."

const frankie = new Person("Frankie");
frankie.name; // "Frankie"
frankie.introduceSelf(); // "Hi! I'm Frankie."
```

Using constructors allows you to define the "shape" of an object and create as many objects as needed, updating only the values for the properties that differ. This approach is more efficient and avoids duplicating code for each object.