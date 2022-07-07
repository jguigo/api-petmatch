const CreateUserUseCase = require("./CreateUserUseCase");
const FindAllUserUseCase = require("./FindAllUserUseCase");
const FindOneUserUseCase = require("./FindOneUserUseCase");
const DeleteUserUseCase = require("./DeleteUserUseCase");
const UpdateUserUseCase = require("./UpdateUserUseCase");

const createUserUseCase = new CreateUserUseCase();
const findAllUserUseCase = new FindAllUserUseCase();
const findOneUserUseCase = new FindOneUserUseCase();
const deleteUserUseCase = new DeleteUserUseCase();
const updateUserUseCase = new UpdateUserUseCase();

module.exports = {
    createUserUseCase,
    findAllUserUseCase,
    findOneUserUseCase,
    deleteUserUseCase,
    updateUserUseCase,
};
