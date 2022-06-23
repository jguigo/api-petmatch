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

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        nome: user.nome,
      },
      secret.key,
    );

    return token;
  }
}

module.exports = AuthUseCase;
