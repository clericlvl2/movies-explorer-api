const jwt = require('jsonwebtoken');

const { getJwtSecret } = require('../utils/helpers');
const { UnauthorizedError } = require('../utils/errors');
const { ERROR_MESSAGE } = require('../utils/errors/constants');

const throwAuthError = () => {
  const message = ERROR_MESSAGE.authorizationRequired;
  throw new UnauthorizedError(message);
};

module.exports = (req, res, next) => {
  const jwtToken = req.cookies.jwt;
  const isLogged = Boolean(jwtToken);

  if (!isLogged) {
    throwAuthError();
  }

  let payload;

  try {
    payload = jwt.verify(jwtToken, getJwtSecret());
  } catch (err) {
    throwAuthError();
  }

  req.user = payload;
  next();
};
