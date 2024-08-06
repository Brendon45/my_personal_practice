### Module 2: DOM Manipulation in JavaScript

#### Section 1: Selecting Elements

Selecting elements is the first step in manipulating the DOM. JavaScript provides several methods to select elements based on different criteria.

#### 2.1.1 getElementById
- **Description**: Selects a single element by its ID attribute.
- **Syntax**: `document.getElementById(id)`
- **Example**:
  ```html
  <button id="myButton">Click Me!</button>
  <script>
    let button = document.getElementById("myButton");
    console.log(button); // Logs the button element
  </script>
  ```

#### 2.1.2 getElementsByClassName
- **Description**: Selects all elements with a given class name. Returns an HTMLCollection, which is a live collection.
- **Syntax**: `document.getElementsByClassName(className)`
- **Example**:
  ```html
  <p class="myClass">Paragraph 1</p>
  <p class="myClass">Paragraph 2</p>
  <script>
    let paragraphs = document.getElementsByClassName("myClass");
    console.log(paragraphs); // Logs an HTMLCollection of paragraphs
  </script>
  ```

#### 2.1.3 getElementsByTagName
- **Description**: Selects all elements with a given tag name. Returns an HTMLCollection.
- **Syntax**: `document.getElementsByTagName(tagName)`
- **Example**:
  ```html
  <h1>Heading 1</h1>
  <h1>Heading 2</h1>
  <script>
    let headings = document.getElementsByTagName("h1");
    console.log(headings); // Logs an HTMLCollection of h1 elements
  </script>
  ```

#### 2.1.4 querySelector
- **Description**: Selects the first element that matches a CSS selector.
- **Syntax**: `document.querySelector(selector)`
- **Example**:
  ```html
  <div class="container">
    <p>First paragraph</p>
  </div>
  <script>
    let firstParagraph = document.querySelector(".container p");
    console.log(firstParagraph); // Logs the first paragraph inside the container
  </script>
  ```

#### 2.1.5 querySelectorAll
- **Description**: Selects all elements that match a CSS selector. Returns a NodeList, which is not live.
- **Syntax**: `document.querySelectorAll(selector)`
- **Example**:
  ```html
  <button class="btn">Button 1</button>
  <button class="btn">Button 2</button>
  <script>
    let allButtons = document.querySelectorAll(".btn");
    console.log(allButtons); // Logs a NodeList of buttons
  </script>
  ```

#### Practical Tips
- **Choosing Selectors**: Use `getElementById` when you know the ID of the element. Use `getElementsByClassName` and `getElementsByTagName` when dealing with multiple elements of the same class or tag. Use `querySelector` and `querySelectorAll` for more complex queries, as they support full CSS selectors.
- **Performance**: `getElementById` is generally faster than other methods because IDs are unique and directly indexed by browsers. Use it when possible for performance-critical applications.

### Conclusion
- **Recap**: We explored different methods for selecting DOM elements: `getElementById`, `getElementsByClassName`, `getElementsByTagName`, `querySelector`, and `querySelectorAll`.
- **Next Section Preview**: In the next section, we'll dive into manipulating these selected elements, including changing their content, attributes, and styles.

Mastering the art of selecting elements is fundamental to DOM manipulation, enabling you to pinpoint the exact parts of the webpage you want to interact with and modify.