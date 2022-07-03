const { userRepository } = require("../../repository/index");

class DeleteUserUseCase {
    async findOne(data) {
        const userId = data.params.id;

        const userDel = await userRepository.findOne(userId);

        if (!userDel) {
            return new Error("Nenhum usuario cadastrado com este ID!");
        }

        const userToDelete = await userRepository.destroy(userId);

        if (!userToDelete) {
            return new Error("Nenhum usuario cadastrado com este ID!");
        }

        return userToDelete;
    }
}

module.exports = DeleteUserUseCase;
