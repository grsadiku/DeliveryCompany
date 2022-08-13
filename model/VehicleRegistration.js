const mongoose = require('mongoose');

const VehicleRegistrationSchema = mongoose.Schema({
    IDVehicle: {
        type: Number,
        require: true
    },
    TagNumber: {
        type: Number,
        require: true
    },
    RegistrationDate: {
        type: Date,
        require: true
    },
    RegistrationExpirationDate: {
        type: Date,
        require: true
    },
    Kilometers: {
        type: Number
    },
    TechnicalControlDate: {
        type: Date
    },
    TechnicalControlCompany: {
        type: String
    },
    TechnicalControlCondition: {
        type: String
    },
    InsuranceCompany: {
        type: String
    },
    InsuranceDate: {
        type: Date
    },
    InsuranceExpiryDate: {
        type: Date
    },
    isLast: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('VehicleRegistration', VehicleRegistrationSchema);