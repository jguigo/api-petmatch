const { userRepository } = require("../../repository/index");

class DeleteUserUseCase {
    async findOne(data) {
        const userId = data.params.id;
        const authId = data.auth;

        const userDel = await userRepository.findOne(userId);

        if (!userDel) {
            return new Error("Nenhum usuario cadastrado com este ID!");
        }

        if (!userId != authId) {
            return new Error("Você não pode realizar essa ação!");
        }

        await userRepository.destroy(userId);

        return;
    }
}

module.exports = DeleteUserUseCase;
