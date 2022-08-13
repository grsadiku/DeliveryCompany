const mongoose = require('mongoose');

const VehicleSchema = mongoose.Schema({
    ChassisNumber: {
        type: Number,
        require: true
    },
    Make: {
        type: String,
        require: true
    },
    Model: {
        type: String,
        require: true
    },
    TechnicalCondition: {
        type: String
    },
    IDActivityType: {
        type: Number
    },
    YearOfProduction: {
        type: Number,
        require: true
    },
    InsertionDate: {
        type: Date,
        default: Date.now()
    },
    IDEntryUser: {
        type: Number,
        require: true
    }
});

module.exports = mongoose.model('Vehicle', VehicleSchema);