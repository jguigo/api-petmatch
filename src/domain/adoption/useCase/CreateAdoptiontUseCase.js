const { adoptionRepository } = require("../../repository/index");

class CreateAdoptionUseCase {
    async create(data) {
        const objAdoption = data.body;
        const { id } = data.params;
        Object.assign(objAdoption, {
            idUser: data.auth.id,
            idPet: id,
        });

        const newAdoption = await adoptionRepository.create(objAdoption);

        return newAdoption;
    }
}

module.exports = CreateAdoptionUseCase;
