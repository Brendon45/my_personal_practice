### Module 3: Building Interactive Web Pages

In this module, we'll build on the skills acquired in the previous modules to create a more complex interactive website. We'll focus on integrating forms, buttons, and dynamic content to make a fully functional, interactive web page.

#### Section 1: Setting Up the Project

First, let's outline the basic structure of our project, including the HTML, CSS, and JavaScript files. We'll create a simple webpage with a form to collect user input, buttons to trigger actions, and areas where content will be dynamically updated.

**File Structure:**
```
/project
  ├── index.html
  ├── styles.css
  └── script.js
```

### 3.1.1 index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive Web Page</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Interactive Web Page</h1>
  
  <!-- Form Section -->
  <form id="userForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <br><br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <br><br>
    <button type="submit">Submit</button>
  </form>
  
  <hr>
  
  <!-- Buttons Section -->
  <button id="toggleInfoBtn">Toggle Info</button>
  <button id="showAlertBtn">Show Alert</button>
  
  <hr>
  
  <!-- Dynamic Content Section -->
  <div id="userInfo" class="hidden">
    <h2>User Information</h2>
    <p id="displayName"></p>
    <p id="displayEmail"></p>
  </div>
  
  <script src="script.js"></script>
</body>
</html>
```

### 3.1.2 styles.css

```css
body {
  font-family: Arial, sans-serif;
  margin: 20px;
}

.hidden {
  display: none;
}

h1, h2 {
  color: #333;
}

form {
  margin-bottom: 20px;
}

button {
  margin: 10px 0;
}
```

### 3.1.3 script.js

```javascript
document.addEventListener("DOMContentLoaded", function() {
  const userForm = document.getElementById("userForm");
  const toggleInfoBtn = document.getElementById("toggleInfoBtn");
  const showAlertBtn = document.getElementById("showAlertBtn");
  const userInfoDiv = document.getElementById("userInfo");
  const displayName = document.getElementById("displayName");
  const displayEmail = document.getElementById("displayEmail");

  // Handle form submission
  userForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Display user information
    displayName.textContent = `Name: ${name}`;
    displayEmail.textContent = `Email: ${email}`;
    userInfoDiv.classList.remove("hidden");
  });

  // Toggle user information visibility
  toggleInfoBtn.addEventListener("click", function() {
    userInfoDiv.classList.toggle("hidden");
  });

  // Show alert on button click
  showAlertBtn.addEventListener("click", function() {
    alert("Button clicked!");
  });
});
```

### Section 2: Explanation of the Project

**HTML Structure:**
- **Form Section**: Collects user input (name and email).
- **Buttons Section**: Contains buttons to trigger various actions.
- **Dynamic Content Section**: Displays user information dynamically.

**CSS Styling:**
- Basic styling for body, headings, form, and buttons.
- `.hidden` class to control the visibility of elements.

**JavaScript Functionality:**
1. **DOMContentLoaded Event**: Ensures the script runs after the DOM is fully loaded.
   ```javascript
   document.addEventListener("DOMContentLoaded", function() {
     // Your code here
   });
   ```

2. **Form Submission Handling**: Prevents the default form submission, retrieves input values, and updates the content of `userInfoDiv`.
   ```javascript
   userForm.addEventListener("submit", function(event) {
     event.preventDefault();
     const name = document.getElementById("name").value;
     const email = document.getElementById("email").value;
     displayName.textContent = `Name: ${name}`;
     displayEmail.textContent = `Email: ${email}`;
     userInfoDiv.classList.remove("hidden");
   });
   ```

3. **Toggle Button**: Toggles the visibility of the user information section.
   ```javascript
   toggleInfoBtn.addEventListener("click", function() {
     userInfoDiv.classList.toggle("hidden");
   });
   ```

4. **Alert Button**: Shows an alert message when the button is clicked.
   ```javascript
   showAlertBtn.addEventListener("click", function() {
     alert("Button clicked!");
   });
   ```

### Section 3: Expanding Functionality

To further enhance the interactive web page, consider adding the following features:

1. **Form Validation**: Validate user input before displaying the information.
   ```javascript
   userForm.addEventListener("submit", function(event) {
     event.preventDefault();
     const name = document.getElementById("name").value;
     const email = document.getElementById("email").value;
     
     if (name === "" || email === "") {
       alert("Please fill in all fields.");
       return;
     }
     
     displayName.textContent = `Name: ${name}`;
     displayEmail.textContent = `Email: ${email}`;
     userInfoDiv.classList.remove("hidden");
   });
   ```

2. **Dynamic Content Update**: Allow users to update their information dynamically.
   ```html
   <button id="updateInfoBtn">Update Info</button>
   
   <script>
     const updateInfoBtn = document.getElementById("updateInfoBtn");
     updateInfoBtn.addEventListener("click", function() {
       const name = prompt("Enter new name:");
       const email = prompt("Enter new email:");
       
       if (name && email) {
         displayName.textContent = `Name: ${name}`;
         displayEmail.textContent = `Email: ${email}`;
       }
     });
   </script>
   ```

### Conclusion

- **Recap**: We created a simple interactive web page with a form, buttons, and dynamic content using HTML, CSS, and JavaScript.
- **Next Steps**: Encourage students to add more interactive elements and explore advanced JavaScript features to enhance their web pages.

This project consolidates their understanding of web development, allowing them to build functional and interactive websites.