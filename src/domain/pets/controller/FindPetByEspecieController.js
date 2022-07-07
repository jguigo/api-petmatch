const { findPetByEspecieUseCase } = require("../useCase");

class FindPetByEspecieController {
    async findByEspecie(req, res) {
        try {
            const petsByEspecie = await findPetByEspecieUseCase.findByEspecie(
                req,
            );

            res.status(2001).json(petsByEspecie);
        } catch (error) {
            return res.status(500).json(`INTERNAL ERROR: ${error}`);
        }
    }
}

module.exports = FindPetByEspecieController;
