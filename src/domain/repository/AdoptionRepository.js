const { Adoption } = require("../../shared/infra/database/models/index");

class AdoptionRepository {
    async create(objAdoption) {
        return await Adoption.create(objAdoption);
    }
    async update(adoptionId, objAdoption) {
        return await Adoption.update(objAdoption, {
            where: { id: adoptionId },
        });
    }

    async findOne(adoptionId) {
        return await Adoption.findOne({
            where: { id: adoptionId },
        });
    }
}

module.exports = AdoptionRepository;
