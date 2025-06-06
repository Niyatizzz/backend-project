const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "please enter username"],
    },
    email: {
        type: String,
        required: [true, "please enter email"],
        unique: [true, "email already exists"],
    },
    password: {
        type: String,
        required: [true, "please enter password"],
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("User", userSchema);