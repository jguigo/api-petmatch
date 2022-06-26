const { deletePetUseCase } = require("../useCase");

class DeletePetController {
    async destroy(req, res) {
        try {
            const deletePet = await deletePetUseCase.destroy(req);

            if (deletePet instanceof Error){
                return res.status(400).json(deletePet.message);
            }
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json(`INTERNAL ERROR: ${error}`);            
        }
    }
}

module.exports = DeletePetController;