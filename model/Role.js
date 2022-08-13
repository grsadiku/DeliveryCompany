const mongoose = require('mongoose');

const RoleSchema = mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    InsertionDate: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Role', RoleSchema);