### Module 2: DOM Manipulation in JavaScript

#### Section 2: Modifying Elements

### Tasks for Students

To ensure students understand how to select and modify elements in the DOM, here are some practical tasks they can work on. These tasks will help reinforce the concepts and give them hands-on experience.

#### Task 1: Change the Heading Text

**Objective**: Change the text of an `h1` element using JavaScript.

**Instructions**:
1. Create an HTML file with an `h1` element.
2. Write JavaScript code to change the text of the `h1` element to "Welcome to JavaScript!"

**HTML**:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Change Heading Text</title>
</head>
<body>
    <h1 id="mainHeading">Original Heading</h1>
    <script>
        // JavaScript code here
    </script>
</body>
</html>
```

**JavaScript**:
```javascript
let heading = document.getElementById("mainHeading");
heading.innerHTML = "Welcome to JavaScript!";
```

#### Task 2: Update Image Source

**Objective**: Change the source of an image using JavaScript.

**Instructions**:
1. Create an HTML file with an `img` element.
2. Write JavaScript code to change the source of the `img` element to a new image URL.

**HTML**:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Change Image Source</title>
</head>
<body>
    <img id="myImage" src="oldImage.jpg" alt="Old Image">
    <script>
        // JavaScript code here
    </script>
</body>
</html>
```

**JavaScript**:
```javascript
let image = document.getElementById("myImage");
image.setAttribute("src", "newImage.jpg");
image.setAttribute("alt", "New Image");
```

#### Task 3: Modify Paragraph Style

**Objective**: Change the style of a paragraph using JavaScript.

**Instructions**:
1. Create an HTML file with a `p` element.
2. Write JavaScript code to change the text color to blue and the background color to light yellow.

**HTML**:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Change Paragraph Style</title>
</head>
<body>
    <p id="myParagraph">This is a paragraph.</p>
    <script>
        // JavaScript code here
    </script>
</body>
</html>
```

**JavaScript**:
```javascript
let paragraph = document.getElementById("myParagraph");
paragraph.style.color = "blue";
paragraph.style.backgroundColor = "lightyellow";
```

#### Task 4: Toggle Button Class

**Objective**: Toggle a class on a button element using JavaScript.

**Instructions**:
1. Create an HTML file with a `button` element.
2. Write JavaScript code to toggle a class on the button when it is clicked.

**HTML**:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Toggle Button Class</title>
    <style>
        .active {
            background-color: green;
            color: white;
        }
    </style>
</head>
<body>
    <button id="myButton">Click Me!</button>
    <script>
        // JavaScript code here
    </script>
</body>
</html>
```

**JavaScript**:
```javascript
let button = document.getElementById("myButton");
button.addEventListener("click", function() {
    button.classList.toggle("active");
});
```

#### Task 5: Create and Add New Element

**Objective**: Create a new `div` element and add it to the body of the document using JavaScript.

**Instructions**:
1. Create an HTML file.
2. Write JavaScript code to create a new `div` element with some text content and add it to the body.

**HTML**:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Create and Add New Element</title>
</head>
<body>
    <script>
        // JavaScript code here
    </script>
</body>
</html>
```

**JavaScript**:
```javascript
let newDiv = document.createElement("div");
newDiv.textContent = "This is a new div!";
document.body.appendChild(newDiv);
```
