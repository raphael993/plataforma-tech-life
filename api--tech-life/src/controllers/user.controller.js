const users = require('../models/users.model.js');
const logs = require('../models/logs.model.js');

class UsersController {
    static getUsers = async (req, res) => {
        try {
            const result = await users.find({});
            res.status(201).json(result);
        } catch(err) {
            console.log(err)
            res.status(500)
        }
    }

    static getUser = async (req, res) => {
        const _id = req.params.id;

        try {
            const result = await users.find({ _id });
            res.status(201).json(result);
        } catch(err) {
            console.log(err)
            res.status(500)
        }
    }

    static createUser = async (req, res) => {
        const body = req.body;

        try {
            await users.insertMany([body]);
            res.status(201).send();
        } catch(err) {
            res.status(500).json(err);
        }
    }

    static updateUser = async (req, res) => {
        const _id = req.params.id;
        const body = req.body;

        try {
            const result = await users.updateOne({ _id }, { $set: body })
            res.status(201).json(result);
        } catch(err) {
            console.log(err)
            res.status(500).send();
        }
    }

    static deleteUser = async(req, res) => {
        const _id = req.params.id;
        const _user = req.params.user;

        try {
            const userToBeRemoved = await users.find({ _id });
            await users.deleteOne({ _id });
            await logs.insertMany([{
                action: `REMOVE USER: ${userToBeRemoved[0]?.name}`,
                user: _user
            }]);
            res.status(201).send('user removed');
        } catch(err) {
            console.log(err)
            res.status(500)
        }
    }
}

module.exports = UsersController;