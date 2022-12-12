const mongoose = require("mongoose");

const batchSchema = new mongoose.Schema({
    user: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    timings: {
        type:String
    },
    month: {
        type: Number
    },
    dateOfAssignment: {
        type: Date,
        default: Date.now()
    }
});

const Batch = mongoose.model("Batch",batchSchema);

module.exports = {Batch};