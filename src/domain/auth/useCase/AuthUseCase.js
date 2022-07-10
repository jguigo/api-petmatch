const { userRepository } = require("../../repository/index");
const { isPasswordMatch } = require("../../../shared/utils/password");
const jwt = require("jsonwebtoken");
const secret = require("../../../config/secret");

class AuthUseCase {
    async execute(data) {
        const { email, senha } = data.body;

        const user = await userRepository.findByEmail(email);
        if (!user) {
            return new Error("Email não cadastrado!");
        }

        if (!isPasswordMatch(senha, user.senha)) {
            return new Error("Senha inválida!");
        }

        const userInfos = {
            id: user.id,
            nome: user.nome,
            userStatus: true,
            permissao: user.permissao == 0 ? "user" : "admin",
        };

        const token = jwt.sign(userInfos, secret.key);

        Object.assign(userInfos, { token });

        return userInfos;
    }
}

module.exports = AuthUseCase;
