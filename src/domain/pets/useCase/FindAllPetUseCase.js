const { petRepository } = require("../../repository/index");

class FindAllPetUseCase {
    async findAll() {
        const pets = await petRepository.findAll();
        
        return pets;
    }
}

module.exports = FindAllPetUseCase;