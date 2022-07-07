const { adoptionRepository, petRepository } = require("../../repository/index");
const STATUS = require("../../../shared/utils/status");

class CreateAdoptionUseCase {
    async create(data) {
        const { id } = data.params;
        const objAdoption = {};

        const petInfo = await petRepository.findOne(id);
        console.log(petInfo.dataValues.petStatus);
        if (petInfo.dataValues.petStatus != 1) {
            return new Error("Pet indisponível para adoção!");
        }

        Object.assign(objAdoption, {
            pet_id: Number(id),
            ownerPet_id: petInfo.dataValues.userID,
            adoptionUser_id: data.auth.id,
        });

        const newAdoption = await adoptionRepository.create(objAdoption);

        await petRepository.update({ petStatus: STATUS.OnApproval }, id);

        return newAdoption;
    }
}

module.exports = CreateAdoptionUseCase;
