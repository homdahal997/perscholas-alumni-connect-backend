const { Router } = require('express');
const { check } = require('express-validator');
const usersCtrl = require('../controllers/userController');

const router = Router();

router.post(
    '/',
    [
        check('name', 'Name is required').notEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
    ],
    usersCtrl.createUser
);

module.exports = router;
