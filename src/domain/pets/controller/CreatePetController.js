const { createPetUseCase } = require('../useCase/index');

class CreatePetController {
    async create(req, res) {

        try {
            const result = await createPetUseCase.create(req);

            return res.status(200).json
        } catch (error) {
            return res.status(500).json(`INTERNAL ERROR: ${error}`);
        }
        
    }
}

module.exports = CreatePetController;