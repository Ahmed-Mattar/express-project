const express = require('express');
const friendsController = require('./controllers/friends.controller');
const messagesController = require('./controllers/messages.controller');



const app = express();


const PORT = 3000;





/*
middleware to calculate the time for processing a request
 */
app.use((req, res, next) => {
    const start = Date.now();
    next();
    // actions go here
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});


app.use(express.json());


app.post('/friends', friendsController.postFriend);

app.get('/friends', friendsController.getFriends);

app.get('/friends/:id', friendsController.getFriend);


app.get('/messages', messagesController.getMessages);


app.post('/messages', messagesController.postMessage);


app.listen(PORT, () => {
    console.log(`up and running on port ${PORT}`);
});