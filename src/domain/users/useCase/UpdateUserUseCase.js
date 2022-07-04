const { userRepository } = require("../../repository/index");
const { hashPassword } = require("../../../shared/utils/password");

class UpdateUserUseCase {
    async update(data) {
        const { id } = data.params;
        const loginUserId = data.auth.id;
        const objUser = data.body;

        if (!(await userRepository.findOne(id))) {
            return new Error("Nenhum usuario cadastrado com este ID!");
        }

        if (!id == loginUserId) {
            return new Error("Sem autorização para realizar está ação!");
        }

        if (objUser.senha) {
            const newPass = hashPassword(senha);
            objUser.senha = newPass;
        }

        await userRepository.update(id, objUser);

        const updateUser = await userRepository.findOne(id);

        return updateUser;
    }
}

module.exports = UpdateUserUseCase;
