const { adoptionRepository } = require("../../repository");

class FindAllAdoptionByUserUseCase {
    async findAllUser(data) {
        const { id } = data.auth;
        const result = await adoptionRepository.findAll({
            adoptionUser_id: id,
        });

        return result;
    }
}

module.exports = FindAllAdoptionByUserUseCase;
