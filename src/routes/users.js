const express = require('express');
const routes = express();
const userController = require('../controller/users');

//User Request
routes.post("/", userController.userLogin);


module.exports = routes;