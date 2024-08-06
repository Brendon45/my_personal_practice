### Module 3: Building Interactive Web Pages

#### Section 5: Introduction to Asynchronous JavaScript

### Task 1: Fetch and Display User Information

**Objective:** 
Create a web page that fetches and displays user information from an API when a button is clicked.

**Instructions:**
1. Create an HTML page with a button labeled "Load User" and a div element to display the user information.
2. Use the Fetch API to request user data from `https://jsonplaceholder.typicode.com/users/1`.
3. When the button is clicked, display the user's name, email, and address in the div.

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fetch User Information</title>
</head>
<body>
  <h1>Fetch User Information</h1>
  <button id="loadUserBtn">Load User</button>
  <div id="userInfo"></div>
  
  <script src="script.js"></script>
</body>
</html>
```

**JavaScript:**

```javascript
document.getElementById("loadUserBtn").addEventListener("click", async function() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    const userInfoDiv = document.getElementById("userInfo");
    userInfoDiv.innerHTML = `
      <h2>${user.name}</h2>
      <p>Email: ${user.email}</p>
      <p>Address: ${user.address.street}, ${user.address.city}</p>
    `;
  } catch (error) {
    console.error('Error fetching user:', error);
  }
});
```

### Task 2: Fetch and Display a List of Posts

**Objective:**
Create a web page that fetches and displays a list of posts from an API when a button is clicked.

**Instructions:**
1. Create an HTML page with a button labeled "Load Posts" and an unordered list element to display the posts.
2. Use the Fetch API to request posts data from `https://jsonplaceholder.typicode.com/posts`.
3. When the button is clicked, display the title and body of each post in the list.

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fetch Posts</title>
</head>
<body>
  <h1>Fetch Posts</h1>
  <button id="loadPostsBtn">Load Posts</button>
  <ul id="postsList"></ul>
  
  <script src="script.js"></script>
</body>
</html>
```

**JavaScript:**

```javascript
document.getElementById("loadPostsBtn").addEventListener("click", async function() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    const postsList = document.getElementById("postsList");
    postsList.innerHTML = '';
    posts.forEach(post => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
      postsList.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
});
```

### Task 3: Form Submission and Data Display

**Objective:**
Create a web page with a form that collects user input and displays the submitted data without refreshing the page.

**Instructions:**
1. Create an HTML page with a form containing input fields for the user's name and email, and a submit button.
2. Use JavaScript to handle the form submission, prevent the default form submission, and display the input data below the form.

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Submission</title>
</head>
<body>
  <h1>Form Submission</h1>
  <form id="userForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <br><br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <br><br>
    <button type="submit">Submit</button>
  </form>
  <div id="submittedData"></div>
  
  <script src="script.js"></script>
</body>
</html>
```

**JavaScript:**

```javascript
document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  
  const submittedDataDiv = document.getElementById("submittedData");
  submittedDataDiv.innerHTML = `
    <h2>Submitted Data</h2>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
  `;
});
```

### Task 4: Error Handling in Fetch Requests

**Objective:**
Create a web page that fetches data from an API and handles potential errors gracefully.

**Instructions:**
1. Create an HTML page with a button labeled "Fetch Data" and a div element to display the data or an error message.
2. Use the Fetch API to request data from a non-existent endpoint to simulate an error.
3. Display an error message if the request fails.

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Error Handling</title>
</head>
<body>
  <h1>Error Handling in Fetch Requests</h1>
  <button id="fetchDataBtn">Fetch Data</button>
  <div id="dataContainer"></div>
  
  <script src="script.js"></script>
</body>
</html>
```

**JavaScript:**

```javascript
document.getElementById("fetchDataBtn").addEventListener("click", async function() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/nonexistent');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    document.getElementById("dataContainer").innerHTML = `
      <h2>${data.title}</h2>
      <p>${data.body}</p>
    `;
  } catch (error) {
    document.getElementById("dataContainer").innerHTML = `
      <p>Error fetching data: ${error.message}</p>
    `;
    console.error('Error fetching data:', error);
  }
});
```
