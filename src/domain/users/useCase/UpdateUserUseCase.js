const { userRepository } = require("../../repository/index");
const { hashPassword } = require("../../../shared/utils/password");

class UpdateUserUseCase {
    async update(data) {
        const objUser = data.body;

        console.log(objUser);

        if (objUser.senha) {
            const newPass = hashPassword(senha);
            const updateUser = await userRepository.update({
                ...objUser,
                senha: newPass,
            });

            return updateUser;
        }

        const updateUser = await userRepository.update({
            ...objUser,
        });

        return updateUser;
    }
}

module.exports = UpdateUserUseCase;
