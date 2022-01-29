const express = require('express');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');


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
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});


app.use(express.json());


app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);



app.listen(PORT, () => {
    console.log(`up and running on port ${PORT}`);
});