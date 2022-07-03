const { userRepository } = require("../../repository/index");

class FindOneUserUseCase {
    async findOne(data) {
        const userId = data.params.id;

        const userById = await userRepository.findOne(userId);

        if (!userById) {
            return new Error("Nenhum usuario cadastrado com este ID!");
        }

        return userById;
    }
}

module.exports = FindOneUserUseCase;
