const { Pets } = require("../../shared/infra/database/models/index");

class PetRepository {
    async findAll() {
        return await Pets.findAll();
    }

    async findOne(petId) {
        return await Pets.findByPk(petId);
    }

    async create(objPet) {
        return await Pets.create(objPet);
    }

    async update(petId, objPet) {
        return await Pets.update(objPet, { where: {id: petId } });
    }

    async destroy(petId) {
        return await Pets.update({ petStatus: 0 }, { where: { id: petId } });
    }
}

module.exports = PetRepository;