const express = require('express');
const { PlayList } = require('../controllers/User');
const { authMiddleware } = require('../middleware/AuthMiddleware');

const router = express.Router()

router.get('/playlist', authMiddleware, PlayList)

module.exports = router