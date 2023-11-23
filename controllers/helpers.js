const { mongoose } = require('mongoose');

const { NotFoundError, HttpError, ValidationError } = require('../utils/errors');
const { ERROR_MESSAGE } = require('../utils/errors/constants');

const MongooseError = mongoose.Error;

const getExistingPropsByKeys = (obj = {}, keysToCheck = []) => {
  const filteredObj = {};

  keysToCheck.forEach((key) => {
    if (obj[key]) {
      filteredObj[key] = obj[key];
    }
  });

  return filteredObj;
};

const checkResponse = (response, errorMessage) => {
  if (!response) {
    throw new NotFoundError(errorMessage);
  }
};

const processError = (err, message = ERROR_MESSAGE.serverError) => {
  switch (true) {
    case err instanceof HttpError: {
      return err;
    }
    case err instanceof MongooseError.ValidationError:
    case err instanceof MongooseError.CastError: {
      return new ValidationError(message);
    }
    default: {
      return new HttpError(message);
    }
  }
};

const unmatchedRouteHandler = (req, res, next) => {
  next(new NotFoundError(ERROR_MESSAGE.invalidRoute));
};

module.exports = {
  processError,
  getExistingPropsByKeys,
  unmatchedRouteHandler,
  checkResponse,
};
