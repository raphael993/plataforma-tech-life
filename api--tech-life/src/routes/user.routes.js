const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/user.controller.js');

router
    .get('/', UsersController.getUsers)
    .get('/:id', UsersController.getUser)
    .post('/', UsersController.createUser)
    .put('/:id', UsersController.updateUser)
    .delete('/:id', UsersController.deleteUser)

module.exports = router;