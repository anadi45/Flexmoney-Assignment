const mongoose = require("mongoose");

const feeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    month: {
        type: Number
    },
    dateOfPayment: {
        type: Date,
        default: Date.now()
    }
});

const Fee = mongoose.model("Fee",feeSchema);

module.exports = {Fee};