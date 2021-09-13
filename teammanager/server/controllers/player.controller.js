const { Player } = require('../models/player.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Welcome"
    });
}

module.exports.createPlayer = (request, response) => {
    const { name, position } = request.body;
    Player.create({
        name,
        position,
        //status1,
        //status2,
        //status3
    })
        .then(player => response.json(player))
        .catch(err => response.status(400).json(err))
}

module.exports.findAllPlayers = (request, response) => {
    Player.find({})
        .then(players => response.json(players))
        .catch(err => response.json({ message: 'Something went wrong', error: err  }));
}

module.exports.deletePlayer = (request, response) => {
    Player.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}