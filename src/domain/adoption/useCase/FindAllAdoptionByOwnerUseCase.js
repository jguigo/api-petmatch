const { adoptionRepository } = require("../../repository");

class FindAllAdoptionByOwnerUseCase {
    async findAllOwner(data) {
        const { id } = data.auth;
        const result = await adoptionRepository.findAll({ ownerPet_id: id });

        return result;
    }
}

module.exports = FindAllAdoptionByOwnerUseCase;
