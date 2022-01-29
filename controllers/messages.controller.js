const path = require('path');

function getMessages(req, res) {
    // res.send('<ul><li>Hello</li></ul>');

    res.sendFile(path.join(__dirname, '..', 'public', 'icelandwaterfall.jpg'));
};


function postMessage(req, res) {
    console.log('Updating messages..');
};


module.exports = {
    getMessages,
    postMessage
};