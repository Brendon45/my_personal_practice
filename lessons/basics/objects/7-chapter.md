Indeed, you've been using objects all along without perhaps realizing it. Many features in JavaScript are built using object structures. For instance, when you use string methods like `myString.split(",")`, you're operating on a String object. Similarly, accessing the Document Object Model (DOM) with lines like `const myDiv = document.createElement("div")` involves methods provided by a Document object.

Every time you create a string or interact with the DOM, behind the scenes, instances of String or Document objects are at play, offering various methods and properties.

Remember, not all built-in objects and APIs automatically create instances. For example, the Notifications API requires you to explicitly instantiate a new object using a constructor for each notification:

```javascript
const myNotification = new Notification("Hello!");
```

Understanding this underlying object-oriented nature of JavaScript is crucial for leveraging its features effectively.