const express = require('express');
const router = express.Router();

const LoginController = require('../controllers/login.controller.js');

router.post('/', LoginController.login)

module.exports = router;