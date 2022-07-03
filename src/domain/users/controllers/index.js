const CreateUserController = require("./CreateUserController");
const FindAllUserController = require("./FindAllUserController");
const FindOneUserController = require("./FindOneUserController");
const FindByEmailUserController = require("./FindByEmailUserController");
const DeleteUserController = require("./DeleteUserController");

const createUserController = new CreateUserController();
const findAllUserController = new FindAllUserController();
const findOneUserController = new FindOneUserController();
const findByEmailUserController = new FindByEmailUserController();
const deleteUserController = new DeleteUserController();

module.exports = {
    createUserController,
    findAllUserController,
    findOneUserController,
    findByEmailUserController,
    deleteUserController,
};
