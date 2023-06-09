const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loanHistorySchema = new Schema({
    loanUser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    loanDate: {
        type: Date
    },
    returnDate: {
        type: Date
    },
    reminderDate: {
        type: Date
    },
});
  
const bookSchema = new Schema({
    loanHistory: [loanHistorySchema],
    loanStatus: {
        type: String,
        enum: ["Unavailable", "Available"],
        default: "Available",
        required: true
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Book', bookSchema);

  




