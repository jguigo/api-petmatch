const { where } = require("sequelize/types");
const { Pet } = require("../../shared/infra/database/models/index");

class PetRepository {
    async findAll() {
        return await Pet.findAll();
    }

    async findOne(petId) {
        return await Pet.findByPk(petId);
    }

    async create(objPet) {
        return await Pet.create(objPet);
    }

    async update(petId, objPet) {
        return await Pet.update(objPet, { where: {id: petId } });
    }

    async destroy(petId) {
        return await Pet.update({ petStatus: 0 }, { where: { id: petId } });
    }
}

module.exports = PetRepository;