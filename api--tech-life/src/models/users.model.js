const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema(
    {
        id: { type: String },
        name: { type: String, required: true },
        email: { type: String, required: true },
        role: { type: String, required: true },
        isActive: { type: String, required: true },
        password: { type: String, required: true },
    }, { timestamps: true }
)

const users = mongoose.model('users', usersSchema)

module.exports = users;