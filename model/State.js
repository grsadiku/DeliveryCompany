const mongoose = require('mongoose');

const StateSchema = mongoose.Schema({
    Title: {
        type: String,
        require: true
    },
    IDEntryUser: {
        type: Number,
        require: true
    },
    InsertionDate: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('State', StateSchema);