const { findAllAdoptionByUserUseCase } = require("../useCase");

class FindAllAdoptionByUserController {
    async findAllByUserId(req, res) {
        try {
            const result = await findAllAdoptionByUserUseCase.findAllUser(req);
            res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(`Erro na adoção. ${error}`);
        }
    }
}

module.exports = FindAllAdoptionByUserController;
