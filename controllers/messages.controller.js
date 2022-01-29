const path = require('path');

function getMessages(req, res) {
    //res.sendFile(path.join(__dirname, '..', 'public', 'images', 'river.jpg'));
    res.render('messages', {
        title: "Messages to my friends!",
        friend: "Mattar"
    });
};


function postMessage(req, res) {
    console.log('Updating messages..');
};


module.exports = {
    getMessages,
    postMessage
};