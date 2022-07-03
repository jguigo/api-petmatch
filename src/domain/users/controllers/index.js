const CreateUserController = require("./CreateUserController");
const FindAllUserController = require("./FindAllUserController");
const FindOneUserController = require("./FindOneUserController");

const createUserController = new CreateUserController();
const findAllUserController = new FindAllUserController();
const findOneUserController = new FindOneUserController();

module.exports = {
    createUserController,
    findAllUserController,
    findOneUserController,
};
