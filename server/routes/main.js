const express = require('express');
const { getUser, getSleepData } = require('../controllers/main.js');

const router = express.Router();

router.get('/user/:name', getUser);
router.get('/sleepdata/:id', getSleepData);

module.exports = router;
