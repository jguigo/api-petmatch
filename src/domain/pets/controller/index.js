const FindAllPetController = require('./FindAllPetController');
const FindOnePetController = require('./FindOnePetController');
const CreatePetController = require('./CreatePetController');

const findAllPetController = new FindAllPetController();
const findOnePetController = new FindOnePetController();
const createPetController = new CreatePetController();

module.exports = {
    findAllPetController,
    findOnePetController,
    createPetController,
}