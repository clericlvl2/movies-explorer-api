const { HTTP_ERROR, ERROR_MESSAGE } = require('../utils/errors/constants');

const errorConsoleLogger = (err, req, res, next) => {
  console.error(err.stack);
  next(err);
};

const globalErrorHandler = (err, req, res, next) => {
  const {
    statusCode = HTTP_ERROR.SERVER.status,
    message = ERROR_MESSAGE.serverError,
  } = err;

  res.status(statusCode).json({ message });
  next();
};

module.exports = {
  errorConsoleLogger,
  globalErrorHandler,
};
