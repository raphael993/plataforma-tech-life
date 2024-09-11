const mongoose = require('mongoose');

const classesSchema = new mongoose.Schema(
    {
        id: { type: String },
        title: { type: String, required: true },
        description: { type: String, required: true },
        videoUrl: { type: String, required: true },
        resourceList: { type: Array, required: true },
        comments: { type: Array, required: true },
    }
)

const classes = mongoose.model('classes', classesSchema)

module.exports = classes;