const express = require('express');


const app = express();


const PORT = 3000;



const friends = [
    {
        id: 0,
        name: 'Sir Isaac Newton'
    },
    {
        id: 1,
        name: 'Albert Einstein'
    }
];

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


app.post('/friends', (req, res) => {

    if (!req.body.name) {
        return res.status(400).json({
            error: 'Missing friend name'
        });
    }

    const newFriend = {
        id: friends.length,
        name: req.body.name
    };

    friends.push(newFriend);

    res.json(newFriend);


});

app.get('/friends', (req, res) => {
    res.json(friends);

});

app.get('/friends/:id', (req, res) => {
    const id = Number(req.params.id);
    const friend = friends[id];
    if (friend) {
        res.status(200).json(friends[id]);
    } else {
        res.status(404).json({
            error: "Friend does not exist"
        });
    }

});


app.get('/messages', (req, res) => {
    res.send('<ul><li>Hello</li></ul>');
});


app.post('/messages', (req, res) => {
    console.log('Updating messages..');
});


app.listen(PORT, () => {
    console.log(`up and running on port ${PORT}`);
});