const PlayerController = require('../controllers/player.controller');
module.exports = function(app) {
    app.get('/api', PlayerController.index);
    app.post('/api/players', PlayerController.createPlayer);
    app.get('/api/players', PlayerController.findAllPlayers);
    app.delete('/api/players/:id', PlayerController.deletePlayer);
    app.put('/api/players/:id', PlayerController.updatePlayer);
}