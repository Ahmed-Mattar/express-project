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

app.get('/friends', (req, res) => {
    res.json(friends);

});

app.get('/friends/:id', (req, res) => {
    const id = Number(req.params.id);
    const friend = friends[id];
    if (friend) {
        res.json(friends[id]);
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