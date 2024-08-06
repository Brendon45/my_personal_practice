### Module 2: DOM Manipulation in JavaScript

#### Section 3: Handling Events

Events are actions or occurrences that happen in the browser, which can be detected and responded to using JavaScript. Common events include clicks, key presses, and mouse movements. Handling events is crucial for creating interactive web applications.

#### 2.3.1 Adding Event Listeners

Event listeners allow you to execute a function when a specific event occurs on an element.

- **addEventListener**: Attaches an event handler to an element.
  - **Syntax**: `element.addEventListener(event, function, useCapture)`
  - **Example**:
    ```html
    <button id="myButton">Click Me!</button>
    <script>
      let button = document.getElementById("myButton");
      button.addEventListener("click", function() {
        alert("Button was clicked!");
      });
    </script>
    ```

#### 2.3.2 Common Events

1. **Mouse Events**
   - **click**: Triggered when an element is clicked.
     ```javascript
     element.addEventListener("click", function() {
       console.log("Element clicked!");
     });
     ```

   - **mouseover**: Triggered when the mouse pointer is over an element.
     ```javascript
     element.addEventListener("mouseover", function() {
       console.log("Mouse over element!");
     });
     ```

   - **mouseout**: Triggered when the mouse pointer leaves an element.
     ```javascript
     element.addEventListener("mouseout", function() {
       console.log("Mouse out of element!");
     });
     ```

2. **Keyboard Events**
   - **keydown**: Triggered when a key is pressed down.
     ```javascript
     document.addEventListener("keydown", function(event) {
       console.log(`Key pressed: ${event.key}`);
     });
     ```

   - **keyup**: Triggered when a key is released.
     ```javascript
     document.addEventListener("keyup", function(event) {
       console.log(`Key released: ${event.key}`);
     });
     ```

3. **Form Events**
   - **submit**: Triggered when a form is submitted.
     ```javascript
     let form = document.querySelector("form");
     form.addEventListener("submit", function(event) {
       event.preventDefault(); // Prevents the form from submitting
       console.log("Form submitted!");
     });
     ```

   - **change**: Triggered when the value of an element changes.
     ```javascript
     let input = document.querySelector("input");
     input.addEventListener("change", function() {
       console.log("Input value changed!");
     });
     ```

4. **Window Events**
   - **load**: Triggered when the entire page has loaded.
     ```javascript
     window.addEventListener("load", function() {
       console.log("Page fully loaded!");
     });
     ```

   - **resize**: Triggered when the window is resized.
     ```javascript
     window.addEventListener("resize", function() {
       console.log("Window resized!");
     });
     ```

#### 2.3.3 Event Object

When an event occurs, an event object is created. This object contains properties and methods related to the event.

- **Example**:
  ```html
  <button id="eventButton">Click Me!</button>
  <script>
    let button = document.getElementById("eventButton");
    button.addEventListener("click", function(event) {
      console.log(event.type); // Outputs: "click"
      console.log(event.target); // Outputs the clicked button element
    });
  </script>
  ```

#### 2.3.4 Removing Event Listeners

- **removeEventListener**: Removes an event handler from an element.
  - **Syntax**: `element.removeEventListener(event, function, useCapture)`
  - **Example**:
    ```html
    <button id="removeButton">Click Me!</button>
    <script>
      function handleClick() {
        alert("Button was clicked!");
      }
      let button = document.getElementById("removeButton");
      button.addEventListener("click", handleClick);
      button.removeEventListener("click", handleClick); // Removes the click event listener
    </script>
    ```

#### Practical Tips

- **Delegating Events**: Instead of adding event listeners to multiple child elements, add a single event listener to a parent element and use the event object's properties to identify the target element.
  ```javascript
  document.getElementById("parent").addEventListener("click", function(event) {
    if (event.target && event.target.matches("button.childButton")) {
      console.log("Child button clicked!");
    }
  });
  ```

- **Throttling/Debouncing**: Use techniques to limit the rate at which events are handled to improve performance, especially for events like scroll or resize.

### Conclusion
- **Recap**: We covered how to handle events using `addEventListener`, explored common events, understood the event object, and learned how to remove event listeners.
- **Next Section Preview**: In the next section, we'll delve into adding and removing elements from the DOM, which is essential for creating dynamic content on web pages.

Mastering event handling is crucial for creating interactive web applications, allowing your code to respond to user actions and other events dynamically.