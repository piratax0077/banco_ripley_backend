'use strict'

var express = require('express');
var userController = require('../controllers/user');

var router = express.Router();

router.post('/save-user',userController.saveUser);
router.get('/users',userController.getUsers);
router.get('/user/:id', userController.getUserById);

router.get('/tipo_cuenta',userController.getTipoCuenta);
router.post('/add-transfer',userController.setTransfer);

module.exports = router;