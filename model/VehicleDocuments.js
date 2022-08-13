const mongoose = require('mongoose');

const VehicleDocumentsSchema = mongoose.Schema({
    IDVehicle: {
        type: Number,
        require: true
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
    IdEntryUser: {
        type : Number,
        require : true,
    },
    InsertionDate: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('VehicleDocuments', VehicleDocumentsSchema);