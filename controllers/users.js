const bcrypt = require('bcryptjs');

const User = require('../models/user');
const { ConflictError } = require('../utils/errors');
const { ERROR_MESSAGE } = require('../utils/errors/constants');
const { processError, getExistingPropsByKeys, checkResponse } = require('./helpers');
const { MODEL_UPDATE_OPTIONS, SALT_ROUNDS } = require('./constants');

const userError = ERROR_MESSAGE.users;

const getUser = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId);

    checkResponse(user, userError.notFound);
    res.send({ data: user });
  } catch (err) {
    next(processError(err));
  }
};

const updateUser = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const newData = getExistingPropsByKeys(req.body, ['name', 'email']);
    const updatedUser = await User.findByIdAndUpdate(userId, newData, MODEL_UPDATE_OPTIONS);

    checkResponse(updatedUser, userError.notFound);
    res.send({ data: updatedUser });
  } catch (err) {
    next(processError(err, userError.invalidDataOnUpdate));
  }
};

const createUser = async (req, res, next) => {
  const { name, password, email } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const newUser = { name, email, password: hashedPassword };
    const user = await User.create(newUser);

    res.send({ data: user.getPublicProps() });
  } catch (err) {
    const error = err.code === 11000
      ? new ConflictError(userError.invalidEmailOnSignUp)
      : processError(err, userError.invalidDataOnCreate);

    next(error);
  }
};

module.exports = {
  getUser,
  createUser,
  updateUser,
};
