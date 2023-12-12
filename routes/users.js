const router = require('express').Router();

const { getUser, updateUser } = require('../controllers/users');
const { validateUserInfo } = require('../utils/validators/users');

router.route('/me')
  .get(getUser)
  .patch(validateUserInfo, updateUser);

module.exports = router;
