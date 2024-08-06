Indeed, the approach we used, creating an object on the go by specifying its contents directly, is called an "object literal." However, there's another common approach: creating objects using a constructor function or a class.

1. **Object Literal (Direct Creation):**
   ```javascript
   const person = {
     name: "John",
     age: 25,
     sayHello() {
       console.log(`Hello, I'm ${this.name}!`);
     },
   };
   ```

2. **Constructor Function:**
   You can create multiple objects with similar structures using a constructor function. It's like a blueprint for creating objects.
   ```javascript
   function Person(name, age) {
     this.name = name;
     this.age = age;
     this.sayHello = function () {
       console.log(`Hello, I'm ${this.name}!`);
     };
   }

   const person1 = new Person("John", 25);
   const person2 = new Person("Jane", 30);
   ```

3. **ES6 Class:**
   With the introduction of ES6, we have a more concise syntax for creating objects using classes.
   ```javascript
   class Person {
     constructor(name, age) {
       this.name = name;
       this.age = age;
     }

     sayHello() {
       console.log(`Hello, I'm ${this.name}!`);
     }
   }

   const person1 = new Person("John", 25);
   const person2 = new Person("Jane", 30);
   ```

**When to Choose:**
- **Object Literal:** Use for creating a single, straightforward object on the fly.
  
- **Constructor Function or Class:** Use when you need to create multiple instances with a similar structure. It's more scalable and helps organize your code.

In the examples above, all three approaches achieve similar results. The choice depends on your specific needs and the complexity of your application. 