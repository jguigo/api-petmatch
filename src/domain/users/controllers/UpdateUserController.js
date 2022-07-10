const { updateUserUseCase } = require("../useCase/index");

class UpdateUserController {
    async update(req, res) {
        try {
            const response = await updateUserUseCase.update(req);
            if (response instanceof Error) {
                return res.status(400).json(response.message);
            }
            return res.status(200).json(response);
        } catch (error) {
            return res
                .status(500)
                .json(`Erro ao cadastrar o usuario: ${error}`);
        }
    }
}

module.exports = UpdateUserController;
