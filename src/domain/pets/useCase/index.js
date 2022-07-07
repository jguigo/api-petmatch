const FindAllPetUseCase = require("./FindAllPetUseCase");
const FindOnePetUseCase = require("./FindOnePetUseCase");
const FindPetByEspecieUseCase = require("./FindPetByEspecieUseCase");
const CreatePetUseCase = require("./CreatePetUseCase");
const UpdatePetUseCase = require("./UpdatePetUseCase");
const DeletePetUseCase = require("./DeletePetUseCase");

const findOnePetUseCase = new FindOnePetUseCase();
const findAllPetUseCase = new FindAllPetUseCase();
const findPetByEspecieUseCase = new FindPetByEspecieUseCase();
const createPetUseCase = new CreatePetUseCase();
const updatePetUseCase = new UpdatePetUseCase();
const deletePetUseCase = new DeletePetUseCase();

module.exports = {
    findAllPetUseCase,
    findOnePetUseCase,
    findPetByEspecieUseCase,
    createPetUseCase,
    updatePetUseCase,
    deletePetUseCase,
};
