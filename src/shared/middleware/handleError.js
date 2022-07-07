const { ValidationError } = require("express-validation");
const { UnauthorizedError } = require("express-jwt");
const { MulterError } = require("multer");
const fs = require("fs");

module.exports = (error, req, res, next) => {
    if (error instanceof ValidationError) {
        if (req.file) {
            fs.unlinkSync(req.file.path);
        }
        return res
            .status(error.statusCode)
            .json(`${error.message}! Preencha todos os campos corretamente...`);
    }

    if (error instanceof UnauthorizedError) {
        return res.status(401).json(error.name);
    }

    if (error instanceof MulterError) {
        return res.status(400).json(error.message);
    }
    return res.status(500).json(error);
};
