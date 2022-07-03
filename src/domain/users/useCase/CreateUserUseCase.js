const { userRepository } = require("../../repository/index");
const { hashPassword } = require("../../../shared/utils/password");

class CreateUserUseCase {
    async create(data) {
        const objUser = data.body;

        const checkEmail = await userRepository.checkEmail(objUser.email);

        if (checkEmail) {
            return new Error("Email já cadastrado");
        }

        const { senha } = data.body;
        const newPass = hashPassword(senha);

        const newUser = await userRepository.create({
            ...objUser,
            senha: newPass,
            permissao: 1,
            userStatus: 1,
        });

        return newUser;
    }
}

module.exports = CreateUserUseCase;
