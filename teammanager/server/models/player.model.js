const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: { type: String,
        required: [
            true,
            "Name is required"
        ], 
        minlength: [2, "Name must be at least two characters"]
    },

    position: { type: String,
        required: [
            true,
            "Preferred position is required"
        ], 
        minlength: [3, "Position must be at least 3 characters"]
    },
    status1: { type: String },
    status2: { type: String },
    status3: { type: String }
}, { timestamps: true });

module.exports.Player = mongoose.model('Player', PlayerSchema);