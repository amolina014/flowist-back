const router = require('express').Router();
const authController = require('../controllers/authController');

router.post('/login', authController.login);
router.post('/create', authController.create);
router.get('/:id', authController.getUserById);

module.exports = router;