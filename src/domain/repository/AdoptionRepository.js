const { Adoption } = require("../../shared/infra/database/models/index");
const STATUS = require("../../shared/utils/status");

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
            where: { id: adoptionId, statusAdocao: STATUS.OnApproval },
        });
    }
    async findAll() {
        return await Adoption.findAll();
    }
}

module.exports = AdoptionRepository;
