const { deleteUserUseCase } = require("../useCase/index");

class DeleteUserController {
    async findOne(req, res) {
        try {
            const result = await deleteUserUseCase.findOne(req);

            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }

            return res
                .status(204)
                .json({ message: "usuário deletado com sucesso" });
        } catch (error) {
            return res.status(500).json(`INTERNAL ERROR: ${error}`);
        }
    }
}

module.exports = DeleteUserController;
