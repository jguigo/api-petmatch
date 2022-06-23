const { petRepository } = require("../../repository/index");

class FindOnePetUseCase {
    async findOne(data) {
        const petId = data.params.id;
        
        const petById = await petRepository.findOne(petId);

        if (!petById) {
            return new Error('Nenhum pet cadastrado com este ID!')
        }

        return petById;
    }
}

module.exports = FindOnePetUseCase;