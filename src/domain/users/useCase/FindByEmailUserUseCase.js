const { userRepository } = require("../../repository/index");

class FindByEmailUserUseCase {
    async findOne(data) {
        const email = data.params.email;

        const userByEmail = await userRepository.findByEmail(email);

        if (!userByEmail) {
            return new Error("Nenhum usuario cadastrado com este ID!");
        }

        return userByEmail;
    }
}

module.exports = FindByEmailUserUseCase;
