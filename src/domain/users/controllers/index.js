const CreateUserController = require("./CreateUserController");
const FindAllUserController = require("./FindAllUserController");

const createUserController = new CreateUserController();
const findAllUserController = new FindAllUserController();

module.exports = {
    createUserController,
    findAllUserController,
};
