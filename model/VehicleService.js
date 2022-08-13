const mongoose = require('mongoose');

const VehicleServiceSchema = mongoose.Schema({
    IDVehicle: {
        type: Number,
        require: true
    },
    ServiceDate: {
        type: Date,
    },
    NextServiceDate: {
        type: Date,
    },
    Kilometers: {
        type: Number
    },
    ServicePlace: {
        type: String
    },
    ServiceDescription: {
        type: String
    },
    isLast: {
        type: Boolean,
        default: false
    },
    IdEntryUser: {
        type : Number,
        require : true,
    }
});

module.exports = mongoose.model('VehicleService', VehicleServiceSchema);