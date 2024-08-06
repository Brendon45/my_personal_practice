### Module 2: DOM Manipulation in JavaScript

#### Section 1: Selecting Elements

#### Tasks for Students

1. **Task 1: Select an Element by ID**
   - **Objective**: Practice using `getElementById` to select an element and change its text content.
   - **Instructions**:
     1. Create an HTML file with the following content:
        ```html
        <!DOCTYPE html>
        <html>
        <head>
          <title>Select by ID</title>
        </head>
        <body>
          <h1 id="mainTitle">Original Title</h1>
          <script>
            // Your JavaScript goes here
          </script>
        </body>
        </html>
        ```
     2. Inside the `<script>` tag, use `document.getElementById` to select the `h1` element with the ID `mainTitle`.
     3. Change the text content of the selected element to "New Title".
   - **Expected Output**: The title on the webpage should change to "New Title".

2. **Task 2: Select Elements by Class Name**
   - **Objective**: Practice using `getElementsByClassName` to select multiple elements and change their styles.
   - **Instructions**:
     1. Create an HTML file with the following content:
        ```html
        <!DOCTYPE html>
        <html>
        <head>
          <title>Select by Class Name</title>
        </head>
        <body>
          <p class="text">Paragraph 1</p>
          <p class="text">Paragraph 2</p>
          <script>
            // Your JavaScript goes here
          </script>
        </body>
        </html>
        ```
     2. Inside the `<script>` tag, use `document.getElementsByClassName` to select all `p` elements with the class name `text`.
     3. Change the color of all selected elements to blue.
   - **Expected Output**: All paragraphs with the class name `text` should have their text color changed to blue.

3. **Task 3: Select Elements by Tag Name**
   - **Objective**: Practice using `getElementsByTagName` to select elements and change their attributes.
   - **Instructions**:
     1. Create an HTML file with the following content:
        ```html
        <!DOCTYPE html>
        <html>
        <head>
          <title>Select by Tag Name</title>
        </head>
        <body>
          <img src="placeholder.jpg" alt="Image 1">
          <img src="placeholder.jpg" alt="Image 2">
          <script>
            // Your JavaScript goes here
          </script>
        </body>
        </html>
        ```
     2. Inside the `<script>` tag, use `document.getElementsByTagName` to select all `img` elements.
     3. Change the `src` attribute of all selected images to `newImage.jpg`.
   - **Expected Output**: Both images on the webpage should display `newImage.jpg`.

4. **Task 4: Select an Element using querySelector**
   - **Objective**: Practice using `querySelector` to select an element and change its HTML content.
   - **Instructions**:
     1. Create an HTML file with the following content:
        ```html
        <!DOCTYPE html>
        <html>
        <head>
          <title>Select by querySelector</title>
        </head>
        <body>
          <div class="container">
            <p>First paragraph</p>
            <p>Second paragraph</p>
          </div>
          <script>
            // Your JavaScript goes here
          </script>
        </body>
        </html>
        ```
     2. Inside the `<script>` tag, use `document.querySelector` to select the first `p` element inside the `div` with the class `container`.
     3. Change the HTML content of the selected `p` element to "Updated First Paragraph".
   - **Expected Output**: The first paragraph inside the `div` should change to "Updated First Paragraph".

5. **Task 5: Select Multiple Elements using querySelectorAll**
   - **Objective**: Practice using `querySelectorAll` to select multiple elements and apply a style change.
   - **Instructions**:
     1. Create an HTML file with the following content:
        ```html
        <!DOCTYPE html>
        <html>
        <head>
          <title>Select by querySelectorAll</title>
        </head>
        <body>
          <button class="btn">Button 1</button>
          <button class="btn">Button 2</button>
          <button class="btn">Button 3</button>
          <script>
            // Your JavaScript goes here
          </script>
        </body>
        </html>
        ```
     2. Inside the `<script>` tag, use `document.querySelectorAll` to select all `button` elements with the class `btn`.
     3. Change the background color of all selected buttons to green.
   - **Expected Output**: All buttons with the class `btn` should have their background color changed to green.
