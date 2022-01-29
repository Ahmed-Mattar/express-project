const model = require('../models/friends.model');


function postFriend(req, res) {
    if (!req.body.name) {
        return res.status(400).json({
            error: 'Missing friend name'
        });
    }
    const newFriend = {
        id: model.length,
        name: req.body.name
    };

    model.push(newFriend);

    res.json(newFriend);
};

function getFriends(req, res) {
    res.json(model);
}

function getFriend(req, res) {
    const id = Number(req.params.id);
    const friend = model[id];
    if (friend) {
        res.status(200).json(model[id]);
    } else {
        res.status(404).json({
            error: "Friend does not exist"
        });
    }

}

module.exports = {
    getFriend,
    getFriends,
    postFriend
};