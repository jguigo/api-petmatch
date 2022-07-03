const CreateUserUseCase = require("./CreateUserUseCase");
const FindAllUserUseCase = require("./FindAllUserUseCase");
const FindOneUserUseCase = require("./FindOneUserUseCase");
const FindByEmailUserUseCase = require("./FindByEmailUserUseCase");
const DeleteUserUseCase = require("./DeleteUserUseCase");

const createUserUseCase = new CreateUserUseCase();
const findAllUserUseCase = new FindAllUserUseCase();
const findOneUserUseCase = new FindOneUserUseCase();
const findByEmailUserUseCase = new FindByEmailUserUseCase();
const deleteUserUseCase = new DeleteUserUseCase();

module.exports = {
    createUserUseCase,
    findAllUserUseCase,
    findOneUserUseCase,
    findByEmailUserUseCase,
    deleteUserUseCase,
};
