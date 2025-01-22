// Create web server with express
// Create a route to handle comments
// Create a route to handle comments by id
// Create a route to handle comments by user id

var express = require('express');
var app = express();
var port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the comments page');
});

app.get('/comments', (req, res) => {
    res.send('Here is a list of comments');
});

app.get('/comments/:id', (req, res) => {
    res.send('Here is a comment with id ' + req.params.id);
});

app.get('/comments/users/:userid', (req, res) => {
    res.send('Here are the comments from user ' + req.params.userid);
});

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});
