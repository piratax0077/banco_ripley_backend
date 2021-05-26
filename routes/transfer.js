'use strict'

var express = require('express');
var transferController = require('../controllers/transfer');

var router = express.Router();

router.get('/',transferController.getAllTransfer);


module.exports = router;