const HttpError = require('./HttpError');
const { HTTP_ERROR } = require('./constants');

class ValidationError extends HttpError {
  constructor(message) {
    super(message);
    this.setErrorProperties(HTTP_ERROR.VALIDATION);
  }
}

module.exports = ValidationError;
