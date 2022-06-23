const { ValidationError } = require("express-validation");
const { UnauthorizedError } = require("express-jwt");

module.exports = (error, req, res, next) => {
  if (error instanceof ValidationError) {
    return res.status(error.statusCode).json(error);
  }

  if (error instanceof UnauthorizedError) {
    return error(error.status).json(error);
  }

  return res.status(500).json(error);
};
