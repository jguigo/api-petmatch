const { adoptionRepository, petRepository } = require("../../repository/index");
const STATUS = require("../../../shared/utils/status");

class CreateAdoptionUseCase {
    async create(data) {
        const { id: petId } = data.params;
        const objAdoption = {};

        const petInfo = await petRepository.findOne(petId);

        if (!petInfo) {
            return new Error("Pet indisponível para adoção!");
        }

        Object.assign(objAdoption, {
            pet_id: Number(petId),
            ownerPet_id: petInfo.dataValues.userID,
            adoptionUser_id: data.auth.id,
        });

        const newAdoption = await adoptionRepository.create(objAdoption);

        await petRepository.update(petId, { petStatus: STATUS.OnApproval });

        return newAdoption;
    }
}

module.exports = CreateAdoptionUseCase;
