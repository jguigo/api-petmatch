const { findAllUserUseCase } = require("../useCase/index");

class FindAllUserController {
    async findAll(req, res) {
        try {
            const result = await findAllUserUseCase.findAll();

            return res.status(200).json(result);
        } catch (error) {
            console.log(error);
            return res.status(500).json(`Nenhum Usuário cadastrado!`);
        }
    }
}

module.exports = FindAllUserController;
