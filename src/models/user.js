const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    secondName: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dateOfAdmission: {
        type: Date,
        default: Date.now()
    }
});

const User = mongoose.model("User",userSchema);

module.exports = {User};