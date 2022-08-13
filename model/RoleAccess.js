const mongoose = require('mongoose');

const RoleAccessSchema = mongoose.Schema({
    IDRole : {
        type: Number,
        require: true
    },
    IDAccessType: {
        type: Number,
        require: true
    },
    IDView: {
        type: Number,
        require: true
    },
    InsertionDate: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('RoleAccess', RoleAccessSchema);