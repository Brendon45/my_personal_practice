### Module 2: DOM Manipulation in JavaScript

#### Section 1: Selecting Elements

#### Quiz for Students

1. **Question 1: What method would you use to select an element with the ID `header`?**
   - A. `document.querySelector("header")`
   - B. `document.getElementById("header")`
   - C. `document.getElementsByClassName("header")`
   - D. `document.getElementsByTagName("header")`
   - **Correct Answer**: B. `document.getElementById("header")`

2. **Question 2: Which method would return an HTMLCollection of all elements with the class name `menu-item`?**
   - A. `document.querySelector(".menu-item")`
   - B. `document.getElementById("menu-item")`
   - C. `document.getElementsByClassName("menu-item")`
   - D. `document.getElementsByTagName("menu-item")`
   - **Correct Answer**: C. `document.getElementsByClassName("menu-item")`

3. **Question 3: Which method allows you to select the first paragraph (`<p>`) inside a div with the class `content`?**
   - A. `document.querySelector(".content p")`
   - B. `document.querySelectorAll(".content p")`
   - C. `document.getElementsByTagName("p")`
   - D. `document.getElementsByClassName("content")`
   - **Correct Answer**: A. `document.querySelector(".content p")`

4. **Question 4: What does `document.getElementsByTagName("li")` return?**
   - A. An array of all `li` elements
   - B. An HTMLCollection of all `li` elements
   - C. A single `li` element
   - D. A NodeList of all `li` elements
   - **Correct Answer**: B. An HTMLCollection of all `li` elements

5. **Question 5: Which method can be used to select all button elements and store them in a NodeList?**
   - A. `document.getElementById("button")`
   - B. `document.querySelector("button")`
   - C. `document.getElementsByTagName("button")`
   - D. `document.querySelectorAll("button")`
   - **Correct Answer**: D. `document.querySelectorAll("button")`

6. **Question 6: True or False? The `getElementById` method returns a NodeList.**
   - **Answer**: False. The `getElementById` method returns a single element object.

7. **Question 7: Which of the following can be used to select the first element with the class `item` within a section with the ID `products`?**
   - A. `document.getElementById("#products .item")`
   - B. `document.querySelector("#products .item")`
   - C. `document.getElementsByClassName("#products .item")`
   - D. `document.getElementsByTagName("#products .item")`
   - **Correct Answer**: B. `document.querySelector("#products .item")`

8. **Question 8: Fill in the blank: The _______ method is used to select all elements that match a given CSS selector and returns a static NodeList.**
   - **Answer**: `querySelectorAll`

9. **Question 9: What is the output of the following code?**
   ```javascript
   let items = document.querySelectorAll(".item");
   console.log(items.length);
   ```
   - A. The total number of elements with the class `item`
   - B. The first element with the class `item`
   - C. An HTMLCollection of elements with the class `item`
   - D. Undefined
   - **Correct Answer**: A. The total number of elements with the class `item`

10. **Question 10: True or False? The `getElementsByClassName` method returns a live collection that updates automatically when elements are added or removed.**
    - **Answer**: True

