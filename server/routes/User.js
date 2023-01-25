const express = require('express');
const { Me } = require('../controllers/User');
const {authMiddleware } = require('../middleware/AuthMiddleware');

const router = express.Router()

router.get('/me',authMiddleware, Me)

module.exports = router