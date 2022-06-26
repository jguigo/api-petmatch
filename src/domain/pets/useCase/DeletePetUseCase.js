const { petRepository } = require("../../repository/index");

class DeletePetUseCase {
    async destroy(data) {
        const petId = data.params.id;
        const userId = data.auth.id;

        const petById = await petRepository.findOne(petId);

        if (!petById) {
            return new Error('Nenhum pet cadastrado com este ID!');
        }

        if (!userId == petById.userID) {
            return new Error('Sem autorização!') 
        }

        await petRepository.destroy(petId);

    }
}

module.exports = DeletePetUseCase;