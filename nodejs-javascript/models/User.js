const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required."],
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        minlength: [8, "Password must be at least 8 characters."],
    },
    role: {
        type: String,
        required: [true, "Role is required."],
        enum: ["admin", "user"],
        default: "user",
    },
    avatar: {
        type: String,
        required: [true, "Avatar is required."]
    }
}, {
    timestamps: true,
});

const User = mongoose.model("User", userSchema);

module.exports = User;