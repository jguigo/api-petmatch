const CreateAdoptionUseCase = require("./CreateAdoptiontUseCase");
const ChooseAdoptionUseCase = require("./ChooseAdoptionUseCase");
const AcceptAdoptionApplyUseCase = require("./AcceptAdoptionApplyUseCase");
const RejectAdoptionApplyUseCase = require("./RejectAdoptionApplyUseCase");
const FindOneAdoptionUseCase = require("./FindOneAdoptionUseCase");
const FindAllAdoptionByOwnerUseCase = require("./FindAllAdoptionByOwnerUseCase");
const FindAllAdoptionByUserUseCase = require("./FindAllAdoptionByUserUseCase");

const createAdoptionUseCase = new CreateAdoptionUseCase();
const chooseAdoptionUseCase = new ChooseAdoptionUseCase();
const acceptAdoptionApplyUseCase = new AcceptAdoptionApplyUseCase();
const rejectAdoptionApplyUseCase = new RejectAdoptionApplyUseCase();
const findOneAdoptionUseCase = new FindOneAdoptionUseCase();
const findAllAdoptionByOwnerUseCase = new FindAllAdoptionByOwnerUseCase();
const findAllAdoptionByUserUseCase = new FindAllAdoptionByUserUseCase();

module.exports = {
    createAdoptionUseCase,
    chooseAdoptionUseCase,
    findOneAdoptionUseCase,
    acceptAdoptionApplyUseCase,
    rejectAdoptionApplyUseCase,
    findAllAdoptionByOwnerUseCase,
    findAllAdoptionByUserUseCase,
};
