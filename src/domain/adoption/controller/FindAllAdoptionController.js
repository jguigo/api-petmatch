const { findAllAdoptionUseCase } = require("../useCase/index");

class FindAllAdoptionController {
    async findAll(req, res) {
        try {
            const result = await findAllAdoptionUseCase.findAll();

            return res.status(200).json(result);
        } catch (error) {
            console.log(error);
            return res.status(500).json(`Nenhuma adoção realizada!`);
        }
    }
}

module.exports = FindAllAdoptionController;
