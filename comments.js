// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create web server
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// The code snippet above uses the Express.js framework to create a web server that listens on port 3000. The app.get() method is used to define a route that responds with 'Hello World!' when the root URL is accessed. The server is started by calling the listen() method on the app object. Express.js simplifies the process of creating web servers and handling HTTP requests in Node.js.