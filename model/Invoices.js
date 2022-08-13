const mongoose = require('mongoose');

const InvoicesSchema = mongoose.Schema({
    IDOrder: {
        type: Number,
        require: true
    },
    Price: {
        type: Number,
        require: true
    },
    DeliveryPrice: {
        type: Number,
        require: true
    },
    TotalAmount: {
        type: Number,
        require: true
    },
    isDone: {
        type: Boolean,
        default: false
    },
    IDEntryUser: {
        type: Number,
        require: true
    },
    InsertionDate: {
        type:Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Invoices', InvoicesSchema);