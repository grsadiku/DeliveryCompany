const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type:String,
        required: true
    },
    Email: {
        type:String,
        required: true
    },
    Username: {
        type:String,
        required: true
    },
    Password: {
        type:String,
        required:true
    },
    Token: {
        type:String
    },
    IDMunicipality: {
        type: Number
    },
    IDRole: {
        type: Number,
        required: true
    },
    Municipality: {
        type:String,
        required: false
    },
    IsActive: {
        type: Boolean,
        default: true
    },
    IsDeleted: {
        type: Boolean,
        default: false,
    },
    InsertionDate: {
        type:Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Users', UserSchema);

