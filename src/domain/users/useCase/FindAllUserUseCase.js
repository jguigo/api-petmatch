const { userRepository } = require("../../repository/index");

class FindAllUserUseCase {
    async findAll() {
        const users = await userRepository.findAll();

        return users;
    }
}

module.exports = FindAllUserUseCase;
