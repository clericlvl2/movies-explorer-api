const jwt = require('jsonwebtoken');

const User = require('../models/user');
const { getJwtSecret } = require('../utils/helpers');
const { COOKIE_OPTIONS, JWT_SIGN_OPTIONS } = require('./constants');

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findUserByCredentials(email, password);
    const token = jwt.sign({ _id: user._id }, getJwtSecret(), JWT_SIGN_OPTIONS);

    res.cookie('jwt', token, COOKIE_OPTIONS).send({});
  } catch (err) {
    next(err);
  }
};

const logout = (req, res) => {
  res.clearCookie('jwt').send({});
};

module.exports = {
  login,
  logout,
};
