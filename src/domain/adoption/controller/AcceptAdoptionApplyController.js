const { acceptAdoptionApplyUseCase } = require("../useCase");

class AcceptAdoptionApplyController {
    async accept(req, res) {
        try {
            const resp = await acceptAdoptionApplyUseCase.accept(req);

            if (resp instanceof Error) {
                return res.status(400).json(resp.message);
            }

            res.status(200).json("Adoção aceita!");
        } catch (error) {
            return res.status(500).json(`Erro na adoção. ${error}`);
        }
    }
}

module.exports = AcceptAdoptionApplyController;
