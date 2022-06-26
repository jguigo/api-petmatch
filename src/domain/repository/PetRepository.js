const { Pets } = require("../../shared/infra/database/models/index");

class PetRepository {
    async findAll() {
        return await Pets.findAll( { where: { petStatus: 1 } } );
    }

    async findOne(petId) {
        return await Pets.findOne({ where: {id: petId, petStatus: 1 } });
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