const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

const userSchema = new Schema({
    name: { 
        type: String,
        maxLength: 100, 
        required: true
    },
    email: {
        type: String,
        maxLength: 150,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minLength: 3,
        maxLength: 30,
        required: true
    }
}, {
    timestamps: true
});

userSchema.pre('save', async function(next) {
    // 'this' is the user doc
    if (!this.isModified('password')) return next();
    // update the password with the computed hash
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
});
  

module.exports = mongoose.model('User', userSchema);