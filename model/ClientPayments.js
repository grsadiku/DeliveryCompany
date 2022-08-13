const mongoose = require('mongoose');
const {mongo} = require("mongoose");


const ClientPaymentsSchema = mongoose.Schema({
    IDClient: {
        type: Number,
        require: true
    },
    Month: {
        type: Number,
        require: true
    },
    Year: {
        type: Number,
        require: true
    },
    TotalIncome: {
        type: Number,
        require: true
    },
    TotalPayments: {
        type: Number,
        require: true
    }
});

module.exports = mongoose.model('ClientPayments', ClientPaymentsSchema);