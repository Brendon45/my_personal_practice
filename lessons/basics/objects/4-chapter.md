In JavaScript, you can not only retrieve but also update and create object members. To set or update a member's value, use either dot notation or bracket notation:

```javascript
person.age = 45;
person["name"]["last"] = "Cratchit";
```

You can verify the changes by retrieving the members:

```javascript
person.age;                  // 45
person["name"]["last"];      // "Cratchit"
```

Moreover, you can create entirely new members dynamically:

```javascript
person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};
```

Now you can access the new members:

```javascript
person["eyes"];             // "hazel"
person.farewell();           // "Bye everybody!"
```

An advantage of bracket notation is its ability to dynamically set member names along with their values. For instance, if you want users to store custom value types in an object, you can collect the member name and value from user input:

```javascript
const myDataName = nameInput.value;
const myDataValue = nameValue.value;
```

Then, add the new member to the object:

```javascript
person[myDataName] = myDataValue;
```

For example, you can dynamically add a "height" property to the person object:

```javascript
const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;
```

Keep in mind that using dot notation for adding properties dynamically, like in the example above, is not feasible. Dot notation requires a literal member name, not a variable value pointing to a name.