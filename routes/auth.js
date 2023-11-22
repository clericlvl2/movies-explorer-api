const router = require('express').Router();

const { login, logout } = require('../controllers/login');
const { createUser } = require('../controllers/users');
const { validateUser } = require('../utils/validators/users');
const { validateLogin } = require('../utils/validators/auth');

router.post('/signup', validateUser, createUser);
router.post('/signin', validateLogin, login);
router.delete('/signout', logout);

module.exports = router;
