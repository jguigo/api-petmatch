const CreateAdoptionUseCase = require("./CreateAdoptiontUseCase");
const ChooseAdoptionUseCase = require("./ChooseAdoptionUseCase");
const FindOneAdoptionUseCase = require("./FindOneAdoptionUseCase");
const AcceptAdoptionApplyUseCase = require("./AcceptAdoptionApplyUseCase");
const RejectAdoptionApplyUseCase = require("./RejectAdoptionApplyUseCase");

const createAdoptionUseCase = new CreateAdoptionUseCase();
const chooseAdoptionUseCase = new ChooseAdoptionUseCase();
const findOneAdoptionUseCase = new FindOneAdoptionUseCase();
const acceptAdoptionApplyUseCase = new AcceptAdoptionApplyUseCase();
const rejectAdoptionApplyUseCase = new RejectAdoptionApplyUseCase();

module.exports = {
    createAdoptionUseCase,
    chooseAdoptionUseCase,
    findOneAdoptionUseCase,
    acceptAdoptionApplyUseCase,
    rejectAdoptionApplyUseCase,
};
