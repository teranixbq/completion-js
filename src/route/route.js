const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.post('/chat', controller.generateText);

module.exports = router;
