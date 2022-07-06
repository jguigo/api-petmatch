const { adoptionRepository } = require("../../repository/index");

class UpdateAdoptionUseCase {
    async update(data) {
        const adoptionId = data.params;
        const resultAdoption = data.body;

        const updateById = await adoptionRepository.findOne(adoptionId);

        await adoptionRepository.update(resultAdoption, updateById);

        const updatedAdoption = await adoptionRepository.findOne(adoptionId);

        return updatedAdoption;
    }
}

module.exports = UpdateAdoptionUseCase;
