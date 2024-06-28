const { Router } = require('express');
const usersCtrl = require('../controllers/userController.js');

const router = Router();

router.post('/', usersCtrl.createUser);

module.exports = router;
