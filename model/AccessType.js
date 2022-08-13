const mongoose = require('mongoose');

const AccessTypeSchema = mongoose.Schema({
    Title: {
        type: String,
        require: true
    },
    InsertionDate: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('AccessType', AccessTypeSchema);