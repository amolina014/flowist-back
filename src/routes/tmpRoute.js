const router = require('express').Router();
const { authMiddleware } = require('../middlewares/authMiddleware');
const tmpController = require('../controllers/tmpController');

router.use(authMiddleware);

router.post('/', tmpController.tmpReq);

module.exports = router; 