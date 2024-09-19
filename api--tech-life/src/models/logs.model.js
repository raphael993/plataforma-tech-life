const mongoose = require('mongoose');

const logsSchema = new mongoose.Schema(
    {
        id: { type: String },
        action: { type: String, required: true },
        user: { type: String, required: true },
    }, { timestamps: true }
)

const logs = mongoose.model('logs', logsSchema)

module.exports = logs;