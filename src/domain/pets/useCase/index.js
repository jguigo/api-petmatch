const FindAllPetUseCase = require("./FindAllPetUseCase");
const FindOnePetUseCase = require("./FindOnePetUseCase");
const CreatePetUseCase = require("./CreatePetUseCase");

const findOnePetUseCase = new FindOnePetUseCase();
const findAllPetUseCase = new FindAllPetUseCase();
const createPetUseCase = new CreatePetUseCase();

module.exports = {
    findAllPetUseCase,
    findOnePetUseCase,
    createPetUseCase,
}