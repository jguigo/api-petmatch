const FindAllPetController = require("./FindAllPetController");
const FindOnePetController = require("./FindOnePetController");
const FindPetByEspecieController = require("./FindPetByEspecieController");
const CreatePetController = require("./CreatePetController");
const UpdatePetController = require("./UpdatePetController");
const DeletePetController = require("./DeletePetController");

const findAllPetController = new FindAllPetController();
const findOnePetController = new FindOnePetController();
const findPetByEspecieController = new FindPetByEspecieController();
const createPetController = new CreatePetController();
const updatePetController = new UpdatePetController();
const deletePetController = new DeletePetController();

module.exports = {
    findAllPetController,
    findOnePetController,
    createPetController,
    updatePetController,
    deletePetController,
    findPetByEspecieController,
};
