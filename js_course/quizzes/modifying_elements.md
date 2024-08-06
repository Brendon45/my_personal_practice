### Module 2: DOM Manipulation in JavaScript

#### Section 2: Modifying Elements

### Quizzes for Students

To ensure students understand the concepts of selecting and modifying DOM elements, here are some quiz questions they can answer. These questions will help reinforce their learning and assess their understanding.

#### Quiz 1: Changing Content

**Question 1**: What is the difference between `innerHTML` and `textContent`?
- A. `innerHTML` changes the text content, while `textContent` changes the HTML content.
- B. `innerHTML` can insert HTML tags, while `textContent` sets plain text without interpreting HTML.
- C. `textContent` is used for getting the text content, while `innerHTML` is used only for setting the HTML content.

**Correct Answer**: B

**Question 2**: Given the following HTML, which JavaScript code will change the text of the paragraph to "Hello, World!"?
```html
<p id="demo">This is a paragraph.</p>
```
- A. `document.getElementById("demo").innerHTML = "Hello, World!";`
- B. `document.getElementById("demo").innerText = "Hello, World!";`
- C. `document.querySelector("p").text = "Hello, World!";`

**Correct Answer**: A

#### Quiz 2: Changing Attributes

**Question 1**: Which method is used to change the value of an attribute of an HTML element?
- A. `setAttribute()`
- B. `getAttribute()`
- C. `changeAttribute()`

**Correct Answer**: A

**Question 2**: Given the following HTML, which JavaScript code will change the `src` attribute of the image to "newImage.jpg"?
```html
<img id="myImage" src="oldImage.jpg">
```
- A. `document.getElementById("myImage").src = "newImage.jpg";`
- B. `document.getElementById("myImage").setAttribute("src", "newImage.jpg");`
- C. `document.querySelector("img").attribute("src", "newImage.jpg");`

**Correct Answer**: B

#### Quiz 3: Changing Styles

**Question 1**: How can you change the background color of a `div` element to blue using JavaScript?
- A. `document.querySelector("div").style.backgroundColor = "blue";`
- B. `document.querySelector("div").style.background = "blue";`
- C. `document.querySelector("div").backgroundColor = "blue";`

**Correct Answer**: A

**Question 2**: Given the following HTML, which JavaScript code will change the font size of the paragraph to 20 pixels?
```html
<p id="myParagraph">This is a paragraph.</p>
```
- A. `document.getElementById("myParagraph").style.size = "20px";`
- B. `document.getElementById("myParagraph").style.fontSize = "20px";`
- C. `document.getElementById("myParagraph").fontSize = "20px";`

**Correct Answer**: B

#### Quiz 4: Manipulating Classes

**Question 1**: Which method is used to add a CSS class to an HTML element?
- A. `addClass()`
- B. `addClassList()`
- C. `classList.add()`

**Correct Answer**: C

**Question 2**: Given the following HTML, which JavaScript code will toggle the class "highlight" on the button element when it is clicked?
```html
<button id="myButton">Click Me!</button>
```
- A. `document.getElementById("myButton").toggle("highlight");`
- B. `document.getElementById("myButton").classList.toggle("highlight");`
- C. `document.querySelector("button").toggleClass("highlight");`

**Correct Answer**: B

#### Quiz 5: Creating and Adding Elements

**Question 1**: Which method is used to create a new HTML element in JavaScript?
- A. `createElement()`
- B. `newElement()`
- C. `appendChild()`

**Correct Answer**: A

**Question 2**: Given the following HTML, which JavaScript code will create a new `div` element with the text "New Div" and add it to the body?
```html
<!DOCTYPE html>
<html>
<head>
    <title>Adding Elements</title>
</head>
<body>
</body>
</html>
```
- A. 
```javascript
let newDiv = document.createElement("div");
newDiv.textContent = "New Div";
document.body.append(newDiv);
```
- B. 
```javascript
let newDiv = document.createElement("div");
newDiv.innerHTML = "New Div";
document.body.appendChild(newDiv);
```
- C. 
```javascript
let newDiv = document.createElement("div");
newDiv.text = "New Div";
document.body.add(newDiv);
```

**Correct Answer**: B
