const express = require('express');
const { Login, Refresh } = require('../controllers/Authentication');


const router = express.Router()

router.post('/login', Login)
router.post('/refresh', Refresh)


module.exports = router