const { updateAdoptionUseCase } = require("../useCase/index");

class UpdateAdoptionController {
    async update(req, res) {
        try {
            const updateAdoption = await updateAdoptionUseCase.update(req);

            if (updateAdoption instanceof Error) {
                return res.status(400).json(updateAdoption.message);
            }

            return res.status(200).json(updateAdoption);
        } catch (error) {
            return res.status(500).json(`INTERNAL ERROR: ${error}`);
        }
    }
}

module.exports = UpdateAdoptionController;
