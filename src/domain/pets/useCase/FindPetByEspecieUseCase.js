const { petRepository } = require("../../repository");

class FindPetByEspecieUseCase {
    async findByEspecie(data) {
        const { especie } = data.params;

        const findEspecie = await petRepository.findAll({
            especie,
        });

        return findEspecie;
    }
}

module.exports = FindPetByEspecieUseCase;
