// Create a web server
// Create a route for /comments
// Send back a response with some comments
// Test it in the browser
// Test it in Postman

const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
    res.send('Here are some comments');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// http://localhost:3000/comments
// Here are some comments

// Postman
// GET http