const FindAllPetController = require('./FindAllPetController');
const FindOnePetController = require('./FindOnePetController');

const findAllPetController = new FindAllPetController();
const findOnePetController = new FindOnePetController();

module.exports = {
    findAllPetController,
    findOnePetController,
}