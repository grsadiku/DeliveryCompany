const mongoose = require('mongoose');
const {mongo} = require("mongoose");

const UserHistorySchema = mongoose.Schema({
    IDUser: {
        type: Number,
        require: true
    },
    TypeAction: {
        type: String, //TODO It should be ENUM type instead of String
    },
    InsertionDate: {
        type: Date,
        default: Date.now()
    },
    ComputerName: {
        type: String,
    },
    IPAddress: {
        type: String,
    },
    BrowserType: {
        type: String, //TODO It should be ENUM type instead of String
    },
    isMobileDevice: {
        type: Boolean,
        default: false
    },
    IDOperationSystemType: {
        type: Number,
    }
});

module.exports = mongoose.model('UserHistory', UserHistorySchema);