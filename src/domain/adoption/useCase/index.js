const CreateAdoptionUseCase = require("./CreateAdoptiontUseCase");
const AcceptAdoptionApplyUseCase = require("./AcceptAdoptionApplyUseCase");
const RejectAdoptionApplyUseCase = require("./RejectAdoptionApplyUseCase");
const FindAllAdoptionByOwnerUseCase = require("./FindAllAdoptionByOwnerUseCase");
const FindAllAdoptionByUserUseCase = require("./FindAllAdoptionByUserUseCase");

const createAdoptionUseCase = new CreateAdoptionUseCase();
const acceptAdoptionApplyUseCase = new AcceptAdoptionApplyUseCase();
const rejectAdoptionApplyUseCase = new RejectAdoptionApplyUseCase();
const findAllAdoptionByOwnerUseCase = new FindAllAdoptionByOwnerUseCase();
const findAllAdoptionByUserUseCase = new FindAllAdoptionByUserUseCase();

module.exports = {
    createAdoptionUseCase,
    acceptAdoptionApplyUseCase,
    rejectAdoptionApplyUseCase,
    findAllAdoptionByOwnerUseCase,
    findAllAdoptionByUserUseCase,
};
