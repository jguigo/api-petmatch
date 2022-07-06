const { chooseAdoptionUseCase } = require("../useCase/index");

class ChooseAdoptionUseCase {
    async update(req, res) {
        try {
            const chooseAdoption = await chooseAdoptionUseCase.update(req);

            if (chooseAdoption instanceof Error) {
                return res.status(400).json(chooseAdoptionUseCase.message);
            }

            return res.status(200).json(chooseAdoption);
        } catch (error) {
            return res.status(500).json(`INTERNAL ERROR: ${error}`);
        }
    }
}

module.exports = ChooseAdoptionUseCase;
