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
        required: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    password: {
        type: String,
        trim: true,
        minLength: 3,
        maxLength: 80,
        required: true
    },
    favouriteBooks: [{
        type: Schema.Types.ObjectId,
        ref: "Collection",
    }],
    preferredGenres: [{
        type: String,
        enum: ["Romance", "Mystery", "Thriller", "Science", "Fantasy", "Academic", "Reference", "Fitness", "Health", "Food", "Cooking", "Art", "Finance", "Self-Help"],
      }],
      
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