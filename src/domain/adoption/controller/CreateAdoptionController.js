const { createAdoptionUseCase } = require("../useCase/index");

class CreateAdoptionController {
    async create(req, res) {
        try {
            const newAdoption = await createAdoptionUseCase.create(req);

            if (newAdoption instanceof Error) {
                return res.status(400).json(newAdoption.message);
            }

            return res.status(201).json(newAdoption);
        } catch (error) {
            return res.status(500).json(`Erro na adoção. ${error}`);
        }
    }
}

module.exports = CreateAdoptionController;
