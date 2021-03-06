const { Pets, Users } = require("../../shared/infra/database/models/index");
const STATUS = require("../../shared/utils/status");

class PetRepository {
    async findAll(where = {}) {
        return await Pets.findAll({
            where: { ...where, petStatus: STATUS.Active },
            include: {
                model: Users,
                attributes: { exclude: ["senha", "permissao", "userStatus"] },
            },
        });
    }

    async findOne(petId) {
        return await Pets.findOne({
            where: { id: petId, petStatus: STATUS.Active },
            include: {
                model: Users,
                attributes: { exclude: ["senha", "permissao", "userStatus"] },
            },
        });
    }

    async create(objPet) {
        return await Pets.create(objPet);
    }

    async update(petId, objPet) {
        return await Pets.update(objPet, { where: { id: petId } });
    }

    async destroy(petId) {
        return await Pets.update(
            { petStatus: STATUS.Deleted },
            { where: { id: petId } },
        );
    }
}

module.exports = PetRepository;
