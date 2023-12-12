const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { UnauthorizedError } = require('../utils/errors');
const { ERROR_MESSAGE } = require('../utils/errors/constants');
const { validateSchemaEmail: validateEmail } = require('../utils/validators/helpers');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validateEmail,
      message: ERROR_MESSAGE.users.invalidEmail,
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

const throwConflictError = () => {
  const message = ERROR_MESSAGE.invalidEmailOrPassword;
  throw new UnauthorizedError(message);
};

userSchema.statics.findUserByCredentials = async function findUserByCredentials(email, password) {
  const user = await this.findOne({ email }).select('+password');

  if (!user) {
    throwConflictError();
  }

  const hasMatch = await bcrypt.compare(password, user.password);

  if (!hasMatch) {
    throwConflictError();
  }

  return user;
};

userSchema.methods.getPublicProps = function getPublicProps() {
  const { password, ...publicProps } = this.toObject();
  return publicProps;
};

module.exports = mongoose.model('user', userSchema);
