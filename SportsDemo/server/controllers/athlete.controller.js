const { Athlete } = require('../models/athlete.model');
module.exports.list = (request, response) => {
    Athlete.find({})
        .then(athletes => response.json(athletes))
        .catch(err => response.json(err))
}

module.exports.create = (request, response) => {
    const { firstName, lastName, sport, team } = request.body;
    Athlete.create({
        firstName,
        lastName,
        sport,
        team
    })
        .then(athlete => {
            response.json(athlete)
        })
        .catch(err => {
            response.status(400).json(err)
        })
}


module.exports.detail = (request, response) => {
    Athlete.findOne({_id:request.params.id})
        .then(athlete => response.json(athlete))
        .catch(err => response.json(err))
}

/*
module.exports.update = (request, response) => {
    const { firstName, lastName, sport, team } = request.body;
    Athlete.findOneAndUpdate({_id: request.params.id}, {
       firstName, 
       lastName,
       sport,
       team 
    },
        {
            new: true,
            useFindAndModify: true
        })
        .then(athlete => {
            response.json(athlete)
        })
        .catch(err => {
            response.status(400).json(err);
        })
}
*/

module.exports.update = (request, response) => {
    Athlete.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedAthlete => response.json(updatedAthlete))
        .catch(err => response.status(400).json(err))
}

module.exports.delete = (request, response) => {
    Athlete.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}