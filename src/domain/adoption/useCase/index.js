const FindAllAdoptionUseCase = require("./FindAllAdoptionUseCase");
const FindOneAdoptionUseCase = require("./FindOneAdoptionUseCase");
const CreateAdoptionUseCase = require("./CreateAdoptionUseCase");
const UpdateAdoptionUseCase = require("./UpdateAdoptionUseCase");
const DeleteAdoptionUseCase = require("./DeleteAdoptionUseCase");

const findOneAdoptionUseCase = new FindOneAdoptionUseCase();
const findAllAdoptionUseCase = new FindAllAdoptionUseCase();
const createAdoptionUseCase = new CreateAdoptionUseCase();
const updateAdoptionUseCase = new UpdateAdoptionUseCase();
const deleteAdoptionUseCase = new DeleteAdoptionUseCase();

module.exports = {
    findAllAdoptionUseCase,
    findOneAdoptionUseCase,
    createAdoptionUseCase,
    updateAdoptionUseCase,
    deleteAdoptionUseCase,
};
