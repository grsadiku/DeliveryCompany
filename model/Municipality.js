const mongoose = require('mongoose');

const MunicipalitySchema = mongoose.Schema({
    Title: {
        type: String,
        require: true
    },
    IDState: {
        type: Number,
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

module.exports = mongoose.model('Municipality', MunicipalitySchema);