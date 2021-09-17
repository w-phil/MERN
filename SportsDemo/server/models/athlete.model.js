const mongoose = require('mongoose');

const AthleteSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [
            true,
            "First Name is required"
        ],
        minlength: [
            2, 
            "First Name must be at least 2 characters"
        ]
    },
    lastName: {
        type: String,
        required: [
            true,
            "Last Name is required"
        ],
        minlength: [
            2, 
            "Last Name must be at least 2 characters"
        ]
    },
    sport: { 
        type: String,
        required: [
            true,
            "Sport is required"
        ],
        minlength: [
            2, 
            "Sport must be at least 2 characters"
        ]
    },
    team: { 
        type: String,
        required: [
            true,
            "Team is required"
        ],
        minlength: [
            2, 
            "Team must be at least 2 characters"
        ]
    }
}, {timesteamps: true})

module.exports.Athlete = mongoose.model('Athlete', AthleteSchema);