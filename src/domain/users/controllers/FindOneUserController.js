const { findOneUserUseCase } = require("../useCase/index");

class FindOneUserController {
    async findOne(req, res) {
        try {
            const result = await findOneUserUseCase.findOne(req);

            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }

            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(`INTERNAL ERROR: ${error}`);
        }
    }
}

module.exports = FindOneUserController;
