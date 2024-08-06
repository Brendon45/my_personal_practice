### Module 2: DOM Manipulation in JavaScript

#### Section 2: Modifying Elements

After selecting elements, the next step in DOM manipulation is modifying these elements. JavaScript allows you to change the content, attributes, and styles of elements to dynamically alter the appearance and behavior of a webpage.

#### 2.2.1 Changing Content

- **innerHTML**: Sets or returns the HTML content inside an element.
  ```javascript
  let heading = document.querySelector("h1");
  heading.innerHTML = "Welcome to My Website"; // Changes the HTML content of the heading
  ```

- **textContent**: Sets or returns the text content inside an element.
  ```javascript
  let paragraph = document.querySelector("p");
  paragraph.textContent = "This is a new paragraph."; // Changes the text content of the paragraph
  ```

#### 2.2.2 Changing Attributes

- **setAttribute**: Adds a new attribute or changes the value of an existing attribute on an element.
  ```javascript
  let image = document.querySelector("img");
  image.setAttribute("src", "newImage.jpg"); // Changes the source attribute of the image
  ```

- **getAttribute**: Returns the value of a specified attribute on an element.
  ```javascript
  let link = document.querySelector("a");
  let hrefValue = link.getAttribute("href"); // Gets the href attribute of the link
  ```

- **removeAttribute**: Removes a specified attribute from an element.
  ```javascript
  let button = document.querySelector("button");
  button.removeAttribute("disabled"); // Removes the disabled attribute from the button
  ```

#### 2.2.3 Changing Styles

- **style property**: Changes the inline style of an element.
  ```javascript
  let div = document.querySelector("div");
  div.style.color = "blue"; // Changes the text color of the div to blue
  div.style.backgroundColor = "yellow"; // Changes the background color of the div to yellow
  ```

- **classList property**: Adds, removes, or toggles CSS classes.
  - **add**: Adds one or more classes to an element.
    ```javascript
    let box = document.querySelector(".box");
    box.classList.add("highlight", "shadow"); // Adds the classes "highlight" and "shadow" to the box
    ```

  - **remove**: Removes one or more classes from an element.
    ```javascript
    box.classList.remove("highlight"); // Removes the class "highlight" from the box
    ```

  - **toggle**: Toggles a class; adds the class if it's not present, and removes it if it is.
    ```javascript
    box.classList.toggle("visible"); // Toggles the class "visible" on the box
    ```

#### Practical Examples

1. **Example: Changing Content**
    ```html
    <h1 id="title">Hello, World!</h1>
    <script>
      let title = document.getElementById("title");
      title.innerHTML = "Hello, JavaScript!"; // Changes the content of the heading
    </script>
    ```

2. **Example: Changing Attributes**
    ```html
    <img id="image" src="oldImage.jpg" alt="Old Image">
    <script>
      let image = document.getElementById("image");
      image.setAttribute("src", "newImage.jpg"); // Changes the source of the image
      image.setAttribute("alt", "New Image"); // Changes the alt text of the image
    </script>
    ```

3. **Example: Changing Styles**
    ```html
    <div id="container">This is a container.</div>
    <script>
      let container = document.getElementById("container");
      container.style.border = "1px solid black"; // Adds a black border to the container
      container.style.padding = "10px"; // Adds padding to the container
   

```javascript
      container.style.backgroundColor = "lightgrey"; // Changes the background color to light grey
    </script>
    ```

4. **Example: Manipulating Classes**
    ```html
    <div id="box" class="box">This is a box.</div>
    <script>
      let box = document.getElementById("box");
      box.classList.add("highlight"); // Adds the "highlight" class
      box.classList.remove("box"); // Removes the "box" class
      box.classList.toggle("visible"); // Toggles the "visible" class
    </script>
    ```

### Conclusion
- **Recap**: We covered how to modify DOM elements by changing their content, attributes, and styles. These methods allow you to dynamically alter the appearance and behavior of web pages.
- **Next Section Preview**: In the next section, we'll learn how to add and remove elements from the DOM, which is essential for creating dynamic and interactive web pages.

Understanding how to modify elements is key to creating dynamic and interactive web applications, enabling you to update the content and style of your web pages based on user interactions and other events.