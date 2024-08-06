### Module 2: DOM Manipulation in JavaScript

#### Section 3: Handling Events - Tasks for Students


#### Task 1: Button Click Alert

- **Objective**: Create a button that shows an alert when clicked.
- **Instructions**:
  1. Create an HTML file with a button element.
  2. Write JavaScript to add an event listener to the button.
  3. When the button is clicked, display an alert with a message.

  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <title>Button Click Alert</title>
  </head>
  <body>
    <button id="alertButton">Click Me!</button>
    <script>
      let button = document.getElementById("alertButton");
      button.addEventListener("click", function() {
        alert("Button was clicked!");
      });
    </script>
  </body>
  </html>
  ```

#### Task 2: Change Text on Hover

- **Objective**: Change the text of a paragraph when the mouse hovers over it.
- **Instructions**:
  1. Create an HTML file with a paragraph element.
  2. Write JavaScript to add `mouseover` and `mouseout` event listeners to the paragraph.
  3. Change the text content when the mouse hovers over and out of the paragraph.

  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <title>Change Text on Hover</title>
  </head>
  <body>
    <p id="hoverParagraph">Hover over this text.</p>
    <script>
      let paragraph = document.getElementById("hoverParagraph");
      paragraph.addEventListener("mouseover", function() {
        paragraph.textContent = "Mouse is over the text!";
      });
      paragraph.addEventListener("mouseout", function() {
        paragraph.textContent = "Hover over this text.";
      });
    </script>
  </body>
  </html>
  ```

#### Task 3: Form Submit Alert

- **Objective**: Display an alert with the form input value when the form is submitted.
- **Instructions**:
  1. Create an HTML file with a form element containing an input field and a submit button.
  2. Write JavaScript to add an event listener to the form's submit event.
  3. Prevent the form from submitting normally and display an alert with the input value.

  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <title>Form Submit Alert</title>
  </head>
  <body>
    <form id="myForm">
      <input type="text" id="inputField" placeholder="Type something">
      <button type="submit">Submit</button>
    </form>
    <script>
      let form = document.getElementById("myForm");
      form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        let input = document.getElementById("inputField").value;
        alert("Form submitted with value: " + input);
      });
    </script>
  </body>
  </html>
  ```

#### Task 4: Toggle Visibility

- **Objective**: Create a button that toggles the visibility of a paragraph.
- **Instructions**:
  1. Create an HTML file with a paragraph element and a button.
  2. Write JavaScript to add an event listener to the button's click event.
  3. Toggle the visibility of the paragraph each time the button is clicked.

  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <title>Toggle Visibility</title>
  </head>
  <body>
    <p id="toggleParagraph">This paragraph will be toggled.</p>
    <button id="toggleButton">Toggle Paragraph</button>
    <script>
      let paragraph = document.getElementById("toggleParagraph");
      let button = document.getElementById("toggleButton");
      button.addEventListener("click", function() {
        if (paragraph.style.display === "none") {
          paragraph.style.display = "block";
        } else {
          paragraph.style.display = "none";
        }
      });
    </script>
  </body>
  </html>
  ```

#### Task 5: Change Background Color

- **Objective**: Create a button that changes the background color of the webpage.
- **Instructions**:
  1. Create an HTML file with a button element.
  2. Write JavaScript to add an event listener to the button's click event.
  3. Change the background color of the webpage each time the button is clicked.

  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <title>Change Background Color</title>
  </head>
  <body>
    <button id="colorButton">Change Background Color</button>
    <script>
      let button = document.getElementById("colorButton");
      button.addEventListener("click", function() {
        document.body.style.backgroundColor = 
          document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
      });
    </script>
  </body>
  </html>
  ```

