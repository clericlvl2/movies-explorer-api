const { JWT_SECRET_DEV } = require('./constants');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports.getJwtSecret = () => (NODE_ENV === 'production' ? JWT_SECRET : JWT_SECRET_DEV);
