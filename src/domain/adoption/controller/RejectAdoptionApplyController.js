const { rejectAdoptionApplyUseCase } = require("../useCase");

class RejectAdoptionApplyController {
    async reject(req, res) {
        try {
            const resp = await rejectAdoptionApplyUseCase.reject(req);

            if (resp instanceof Error) {
                return res.status(400).json(resp.message);
            }

            res.status(200).json("Adoção recusada!");
        } catch (error) {
            return res.status(500).json(`Erro na adoção. ${error}`);
        }
    }
}

module.exports = RejectAdoptionApplyController;
