const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    IdEntryUser: {
        type : Number,
        require : true,
    },
    InsertionDate : {
        type : Date,
        default: Date.now(),
    },
    Description : {
        type : String,
        require : false,
    },
    IdStatus : {
        type : Number,
        default : 1,
    },
    Price : {
        type : Number,
        require : true,
    },
    AddressFrom : {
        type: String,
        require: true,
    },
    AddressTo : {
        type: String,
        require: true,
    },
});

module.exports = mongoose.model("Orders", OrderSchema);