const { petRepository } = require("../../repository/index");

class CreatePetUseCase {
    async create(data) {
        const objPet = data.body;
        Object.assign(objPet, {
            userID: data.auth.id
        });

        const newPet = await petRepository.create(objPet);

        return newPet;
    }
    
}

module.exports = CreatePetUseCase;