const express = require('express');
const router = express.Router();

const ClassesController = require('../controllers/classes.controller.js');

router
    .get('/', ClassesController.getClasses)
    .get('/:id', ClassesController.getClass)
    .post('/', ClassesController.createClass)
    .put('/:id', ClassesController.updateClass)
    .delete('/:id/:user', ClassesController.deleteClass)

module.exports = router;
