const classes = require('../models/classes.model.js');

class ClassesController {
    static getClasses = async (req, res) => {
        try {
            const result = await classes.find({});
            res.status(201).json(result);
        } catch(err) {
            console.log(err)
            res.status(500)
        }
    }

    static getClass = async (req, res) => {
        const _id = req.params.id;

        try {
            const result = await classes.find({ _id });
            res.status(201).json(result);
        } catch(err) {
            console.log(err)
            res.status(500)
        }
    }

    static createClass = async (req, res) => {
        const body = req.body;

        try {
            await classes.insertMany([body]);
            res.status(201).send();
        } catch(err) {
            res.status(500).json(err);
        }
    }

    static updateClass = async (req, res) => {
        const _id = req.params.id;
        const body = req.body;

        try {
            const result = await classes.updateOne({ _id }, { $set: body })
            res.status(201).json(result);
        } catch(err) {
            console.log(err)
            res.status(500).send();
        }
    }

    static deleteClass = async(req, res) => {
        const _id = req.params.id;

        try {
            await classes.deleteOne({ _id });
            res.status(201).send('class removed');
        } catch(err) {
            console.log(err)
            res.status(500)
        }
    }
}

module.exports = ClassesController;