const mongoose = require('mongoose');

const VehicleRegistationDocumnets = mongoose.Schema({
    IDRegistration: {
        type: Number,
        require : true
    },
    OriginalName: {
        type: String,
        require: true
    },
    Path: {
        type: String
    },
    Size: {
        type: Number
    },
    IDType: {
        type: Number //TODO this type should be enum type
    },
    IdEntryUser: {
        type : Number,
        require : true,
    },
    InsertionDate: {
        type: Date,
        default: Date.now()
    }
})