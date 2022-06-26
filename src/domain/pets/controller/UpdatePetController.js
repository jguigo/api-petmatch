const { updatePetUseCase } = require('../useCase/index');

class UpdatePetController {
    async update(req, res) {
        try {
            const updatePet = await updatePetUseCase.update(req);

            if (updatePet instanceof Error) {
                return res.status(400).json(updatePet.message);
            }

            return res.status(200).json(updatePet);
        } catch (error) {
            return res.status(500).json(`INTERNAL ERROR: ${error}`)
        }
    }
}

module.exports = UpdatePetController;