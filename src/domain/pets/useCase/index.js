const FindAllPetUseCase = require("./FindAllPetUseCase");
const FindOnePetUseCase = require("./FindOnePetUseCase");

const findOnePetUserCase = new FindOnePetUseCase();
const findAllPetUserCase = new FindAllPetUseCase();

module.exports = {
    findAllPetUserCase,
    findOnePetUserCase,
}