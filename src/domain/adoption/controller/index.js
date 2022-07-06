const CreateAdoptionController = require("./CreateAdoptionController");
const ChooseAdoptionController = require("./ChooseAdoptionController");
const FindOneAdoptionController = require("./FindOneAdoptionController");

const createAdoptionController = new CreateAdoptionController();
const chooseAdoptionController = new ChooseAdoptionController();
const findOneAdoptionController = new FindOneAdoptionController();

module.exports = {
    createAdoptionController,
    chooseAdoptionController,
    findOneAdoptionController,
};
