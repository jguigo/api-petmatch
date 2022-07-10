const { findAllAdoptionByOwnerUseCase } = require("../useCase");

class FindAllAdoptionByOwnerController {
    async findAllByOwnerId(req, res) {
        try {
            const result = await findAllAdoptionByOwnerUseCase.findAllOwner(
                req,
            );
            res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(`Erro na adoção. ${error}`);
        }
    }
}

module.exports = FindAllAdoptionByOwnerController;
