const create = require("./create");
const findOne = require("./findOne");
const update = require("./update");
const destroy = require("./delete");

const petsValidation = {
    create,
    findOne,
    update,
    destroy,
};

module.exports = petsValidation;