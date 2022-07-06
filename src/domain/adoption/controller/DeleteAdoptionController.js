const { deleteAdoptionUseCase } = require("../useCase");

class DeleteAdoptionController {
    async destroy(req, res) {
        try {
            const deleteAdoption = await deleteAdoptionUseCase.destroy(req);

            if (deleteAdoption instanceof Error) {
                return res.status(400).json(deleteAdoption.message);
            }
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json(`INTERNAL ERROR: ${error}`);
        }
    }
}

module.exports = DeleteAdoptionController;
