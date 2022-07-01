const { Pets } = require("../../shared/infra/database/models/index");
const STATUS = require("../../shared/utils/status");

class PetRepository {
    async findAll() {
        return await Pets.findAll( { where: { petStatus: STATUS.Active } } );
    }

    async findOne(petId) {
        return await Pets.findOne({ where: {id: petId, petStatus: STATUS.Active } });
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