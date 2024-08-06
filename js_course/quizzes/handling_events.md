### Module 2: DOM Manipulation in JavaScript

#### Section 3: Handling Events - Quizzes for Students


#### Quiz 1: Basics of Event Handling

1. **What is the correct syntax for adding an event listener to an element with the ID `myButton` to respond to a click event?**
   - a) `myButton.addEventListener("onclick", function() {});`
   - b) `document.addEventListener("click", function() {});`
   - c) `document.getElementById("myButton").addEventListener("click", function() {});`
   - d) `myButton.onclick = function() {};`

2. **Which of the following events is triggered when a key is pressed down?**
   - a) `keyup`
   - b) `keydown`
   - c) `keypress`
   - d) `keyhold`

3. **How can you prevent the default action of a form submission in JavaScript?**
   - a) `event.preventSubmit();`
   - b) `event.preventDefault();`
   - c) `form.preventDefault();`
   - d) `form.preventSubmit();`

#### Quiz 2: Practical Event Handling

4. **What will the following code do when a button with the ID `btn` is clicked?**
   ```javascript
   let button = document.getElementById("btn");
   button.addEventListener("click", function() {
     alert("Button clicked!");
   });
   ```
   - a) Change the button text
   - b) Display an alert with the message "Button clicked!"
   - c) Change the background color of the button
   - d) Log a message to the console

5. **What is the purpose of the `event` parameter in an event listener function?**
   - a) It specifies the type of event to listen for
   - b) It provides information about the event that occurred
   - c) It defines the element that triggered the event
   - d) It cancels the event from occurring

#### Quiz 3: Advanced Event Handling

6. **Which method would you use to remove an event listener from an element?**
   - a) `element.removeEventHandler()`
   - b) `element.removeEvent()`
   - c) `element.removeEventListener()`
   - d) `element.detachEvent()`

7. **How can you delegate events to a parent element to handle events from its child elements?**
   - a) By using `event.target` inside the parent's event listener
   - b) By using `event.delegate` inside the parent's event listener
   - c) By adding event listeners to each child element
   - d) By using `event.currentTarget` inside the parent's event listener

8. **What will the following code output when a button with the ID `testButton` is clicked?**
   ```javascript
   let button = document.getElementById("testButton");
   button.addEventListener("click", function(event) {
     console.log(event.type);
     console.log(event.target);
   });
   ```
   - a) The type of event and the window object
   - b) The type of event and the clicked button element
   - c) The type of event and the document object
   - d) The type of event and the body element

### Answers

1. c) `document.getElementById("myButton").addEventListener("click", function() {});`
2. b) `keydown`
3. b) `event.preventDefault();`
4. b) Display an alert with the message "Button clicked!"
5. b) It provides information about the event that occurred
6. c) `element.removeEventListener()`
7. a) By using `event.target` inside the parent's event listener
8. b) The type of event and the clicked button element

