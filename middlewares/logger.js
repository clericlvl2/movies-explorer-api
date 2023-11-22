const winston = require('winston');
const expressWinston = require('express-winston');

const REQUEST_LOG_FILE = new winston.transports.File({ filename: 'request.log' });
const ERROR_LOG_FILE = new winston.transports.File({ filename: 'error.log' });
const LOG_FORMAT = winston.format.json();

const requestLogger = expressWinston.logger({
  transports: [REQUEST_LOG_FILE],
  format: LOG_FORMAT,
});

const errorLogger = expressWinston.errorLogger({
  transports: [ERROR_LOG_FILE],
  format: LOG_FORMAT,
});

module.exports = {
  requestLogger,
  errorLogger,
};
