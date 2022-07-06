const CreateAdoptionUseCase = require("./CreateAdoptiontUseCase");
const ChooseAdoptionUseCase = require("./ChooseAdoptionUseCase");
const FindOneAdoptionUseCase = require("./FindOneAdoptionUseCase");

const createAdoptionUseCase = new CreateAdoptionUseCase();
const chooseAdoptionUseCase = new ChooseAdoptionUseCase();
const findOneAdoptionUseCase = new FindOneAdoptionUseCase();

module.exports = {
    createAdoptionUseCase,
    chooseAdoptionUseCase,
    findOneAdoptionUseCase,
};
