const express = require('express');
const { Artists } = require('../controllers/Artist');

const router = express.Router()

router.get('/top-artists', Artists)


module.exports = router