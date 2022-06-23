const bcrypt = require("bcryptjs");

function hashPassword(password) {
  return bcrypt.hashSync(password, 10);
}

function isPasswordMatch(password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword);
}

module.exports = {
  hashPassword,
  isPasswordMatch,
};
