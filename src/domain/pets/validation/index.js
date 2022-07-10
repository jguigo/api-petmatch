const create = require("./create");
const findOne = require("./findOne");
const findByEspecie = require("./findByEspecie");
const update = require("./update");
const destroy = require("./delete");

const petsValidation = {
    create,
    findOne,
    findByEspecie,
    update,
    destroy,
};

module.exports = petsValidation;
