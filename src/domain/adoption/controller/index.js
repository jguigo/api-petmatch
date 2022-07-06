const FindAllAdoptionController = require("./FindAllAdoptionController");
const FindOneAdoptionController = require("./FindOneAdoptionController");
const CreateAdoptionController = require("./CreateAdoptionController");
const UpdateAdoptionController = require("./UpdateAdoptionController");
const DeleteAdoptionController = require("./DeleteAdoptionController");

const findAllAdoptionController = new FindAllAdoptionController();
const findOneAdoptionController = new FindOneAdoptionController();
const createAdoptionController = new CreateAdoptionController();
const updateAdoptionController = new UpdateAdoptionController();
const deleteAdoptionController = new DeleteAdoptionController();

module.exports = {
    findAllAdoptionController,
    findOneAdoptionController,
    createAdoptionController,
    updateAdoptionController,
    deleteAdoptionController,
};
