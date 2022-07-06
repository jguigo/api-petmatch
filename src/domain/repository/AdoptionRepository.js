const { Adoption } = require("../../shared/infra/database/models/index");

class AdoptionRepository {
    async findAll() {
        return await Adoption.findAll();
    }
    async findOne(adoptionId) {
        return await Adoption.findOne({
            where: {
                id: adoptionId,
            },
        });
    }

    async create(objAdoption) {
        return await Adoption.create(objAdoption);
    }
    async update(adoptionId, objAdoption) {
        return await Adoption.update(objAdoption, {
            where: { id: adoptionId },
        });
    }
    async destroy(adoptionId) {
        return await Adoption.destroy({ where: { id: adoptionId } });
    }
}

module.exports = AdoptionRepository;
