const Songs=require('../controllers/SongsController');
const {authMiddleware} = require("../middleware/AuthMiddleware");
const router=require('express').Router();

router.get('/recommendations',authMiddleware,Songs.getSongsRecommendations)

module.exports = router;