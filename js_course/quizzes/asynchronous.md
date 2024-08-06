### Module 3: Building Interactive Web Pages

#### Section 5: Introduction to Asynchronous JavaScript

### Quizzes with Answers

### Quiz 1: Understanding Asynchronous Concepts

1. **What is the main difference between synchronous and asynchronous operations in JavaScript?**
   - a) Synchronous operations block the execution of subsequent code until they complete.
   - b) Asynchronous operations block the execution of subsequent code until they complete.
   - c) Synchronous operations run faster than asynchronous operations.
   - d) Asynchronous operations run faster than synchronous operations.
   - **Answer: a)**

2. **What is a callback function?**
   - a) A function that is called when a user clicks a button.
   - b) A function passed as an argument to another function and executed after an asynchronous operation completes.
   - c) A function that runs synchronously.
   - d) A function used to manipulate the DOM.
   - **Answer: b)**

3. **Which of the following is an example of a Promise in JavaScript?**
   - a) `new Callback(function(resolve, reject) { ... })`
   - b) `new Promise(function(resolve, reject) { ... })`
   - c) `async function myFunc() { ... }`
   - d) `await fetch('https://api.example.com')`
   - **Answer: b)**

4. **What does the `await` keyword do in an `async` function?**
   - a) It makes the function run synchronously.
   - b) It pauses the execution of the function until the Promise is resolved or rejected.
   - c) It rejects a Promise.
   - d) It resolves a Promise.
   - **Answer: b)**

### Quiz 2: Making Requests to Servers

1. **Which method is used to make HTTP requests in modern JavaScript?**
   - a) `XMLHttpRequest`
   - b) `fetch`
   - c) `$.ajax`
   - d) `request`
   - **Answer: b)**

2. **What does the `fetch` function return?**
   - a) A callback function
   - b) An XMLHttpRequest object
   - c) A Promise
   - d) A JSON object
   - **Answer: c)**

3. **How can you handle errors when using the Fetch API?**
   - a) Using `try...catch` blocks
   - b) Using the `catch` method on the Promise
   - c) Checking the `ok` property of the response object
   - d) All of the above
   - **Answer: d)**

4. **What will the following code log to the console if the fetch request fails?**
   ```javascript
   fetch('https://jsonplaceholder.typicode.com/nonexistent')
     .then(response => response.json())
     .then(data => console.log(data))
     .catch(error => console.error('Error:', error));
   ```
   - a) The fetched data
   - b) The string 'Error: Network response was not ok'
   - c) The string 'Error: <error message>'
   - d) Nothing
   - **Answer: c)**

### Quiz 3: Handling Data Asynchronously

1. **What is the purpose of `JSON.stringify()` and `JSON.parse()` in JavaScript?**
   - a) `JSON.stringify()` converts a JavaScript object to a JSON string, and `JSON.parse()` converts a JSON string to a JavaScript object.
   - b) `JSON.stringify()` converts a JSON string to a JavaScript object, and `JSON.parse()` converts a JavaScript object to a JSON string.
   - c) Both convert JSON strings to JavaScript objects.
   - d) Both convert JavaScript objects to JSON strings.
   - **Answer: a)**

2. **What is the correct way to fetch data from an API and log the result using async/await?**
   - a) 
     ```javascript
     async function fetchData() {
       const response = fetch('https://api.example.com/data');
       console.log(await response.json());
     }
     fetchData();
     ```
   - b) 
     ```javascript
     async function fetchData() {
       const response = await fetch('https://api.example.com/data');
       console.log(response.json());
     }
     fetchData();
     ```
   - c) 
     ```javascript
     async function fetchData() {
       const response = await fetch('https://api.example.com/data');
       const data = await response.json();
       console.log(data);
     }
     fetchData();
     ```
   - d) 
     ```javascript
     async function fetchData() {
       const response = fetch('https://api.example.com/data');
       const data = response.json();
       console.log(await data);
     }
     fetchData();
     ```
   - **Answer: c)**

3. **Which of the following statements about Promises is true?**
   - a) Promises are used for synchronous code execution.
   - b) A Promise can be in one of three states: pending, fulfilled, or rejected.
   - c) Promises are only used for making HTTP requests.
   - d) Promises cannot be chained.
   - **Answer: b)**

### Quiz 4: Practical Applications

1. **Given the following code, what will be displayed in the `#userInfo` div after the button is clicked?**
   ```html
   <button id="loadUserBtn">Load User</button>
   <div id="userInfo"></div>
   <script>
     document.getElementById("loadUserBtn").addEventListener("click", async function() {
       const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
       const user = await response.json();
       document.getElementById("userInfo").innerHTML = `
         <h2>${user.name}</h2>
         <p>Email: ${user.email}</p>
         <p>Address: ${user.address.street}, ${user.address.city}</p>
       `;
     });
   </script>
   ```
   - a) An error message
   - b) The name, email, and address of the user
   - c) Nothing
   - d) A loading spinner
   - **Answer: b)**

2. **What is the purpose of the `try...catch` block in the following code?**
   ```javascript
   document.getElementById("fetchDataBtn").addEventListener("click", async function() {
     try {
       const response = await fetch('https://jsonplaceholder.typicode.com/nonexistent');
       const data = await response.json();
       document.getElementById("dataContainer").innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
     } catch (error) {
       document.getElementById("dataContainer").innerHTML = `<p>Error fetching data: ${error.message}</p>`;
       console.error('Error fetching data:', error);
     }
   });
   ```
   - a) To handle errors that occur during the fetch request
   - b) To format the fetched data
   - c) To log the data to the console
   - d) To prevent the fetch request from running
   - **Answer: a)**

