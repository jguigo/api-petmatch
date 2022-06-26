const { createPetUseCase } = require('../useCase/index');

class CreatePetController {
    async create(req, res) {

        try {
            const newPet = await createPetUseCase.create(req);

            return res.status(201).json(newPet);
        } catch (error) {
            return res.status(500).json(`Erro ao cadastrar o pet. ${error}`);
        }
        
    }
}

module.exports = CreatePetController;