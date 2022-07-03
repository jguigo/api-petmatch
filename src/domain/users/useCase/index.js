const CreateUserUseCase = require("./CreateUserUseCase");
const FindAllUserUseCase = require("./FindAllUserUseCase");
const FindOneUserUseCase = require("./FindOneUserUseCase");

const createUserUseCase = new CreateUserUseCase();
const findAllUserUseCase = new FindAllUserUseCase();
const findOneUserUseCase = new FindOneUserUseCase();

module.exports = {
    createUserUseCase,
    findAllUserUseCase,
    findOneUserUseCase,
};
