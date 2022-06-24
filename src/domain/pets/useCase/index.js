const FindAllPetUseCase = require("./FindAllPetUseCase");
const FindOnePetUseCase = require("./FindOnePetUseCase");
const CreatePetUseCase = require("./CreatePetUseCase");

const findOnePetUserCase = new FindOnePetUseCase();
const findAllPetUserCase = new FindAllPetUseCase();
const createPetUseCase = new CreatePetUseCase();

module.exports = {
    findAllPetUserCase,
    findOnePetUserCase,
    createPetUseCase,
}