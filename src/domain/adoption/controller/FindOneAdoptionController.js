const { findOneAdoptionUseCase } = require("../useCase/index");

class FindOnePetController {
    async findOne(req, res) {
        try {
            const result = await findOneAdoptionUseCase.findOne(req);

            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }

            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(`INTERNAL ERROR: ${error}`);
        }
    }
}

module.exports = FindOnePetController;
