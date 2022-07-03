const { createUserUseCase } = require("../useCase/index");

class CreateUserController {
    async create(req, res) {
        try {
            const response = await createUserUseCase.create(req);
            if (response instanceof Error) {
                return res.status(400).json(response.message);
            }
            return res.status(201).json(response);
        } catch (error) {
            return res
                .status(500)
                .json(`Erro ao cadastrar o usuario: ${error}`);
        }
    }
}

module.exports = CreateUserController;
