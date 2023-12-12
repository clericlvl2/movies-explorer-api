const jwt = require('jsonwebtoken');

const User = require('../models/user');
const { getJwtSecret } = require('../utils/helpers');
const { COOKIE_OPTIONS, JWT_SIGN_OPTIONS, MESSAGES } = require('./constants');

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findUserByCredentials(email, password);
    const token = jwt.sign({ _id: user._id }, getJwtSecret(), JWT_SIGN_OPTIONS);
    const message = MESSAGES.successfulLogin;

    res.cookie('jwt', token, COOKIE_OPTIONS).send({ message });
  } catch (err) {
    next(err);
  }
};

const logout = (req, res) => {
  const message = MESSAGES.successfulLogout;

  res.clearCookie('jwt').send({ message });
};

module.exports = {
  login,
  logout,
};
