const express = require('express');
const studentController = require('../controllers/studentController');
const router = express.Router();

router.get('/', studentController.summaryStudent);

module.exports = router;
