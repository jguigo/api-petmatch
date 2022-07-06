const { adoptionRepository } = require("../../repository/index");

class FindOneAdoptionUseCase {
    async findOne(data) {
        const adoptionId = data.params.id;

        const adoptionById = await adoptionRepository.findOne(adoptionId);

        if (!adoptionById) {
            return new Error("Nenhum adocao cadastrado com este ID!");
        }

        return adoptionById;
    }
}

module.exports = FindOneAdoptionUseCase;
