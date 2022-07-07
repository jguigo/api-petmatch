const CreateAdoptionController = require("./CreateAdoptionController");
const ChooseAdoptionController = require("./ChooseAdoptionController");
const AcceptAdoptionApplyController = require("./AcceptAdoptionApplyController");
const RejectAdoptionApplyController = require("./RejectAdoptionApplyController");
const FindOneAdoptionController = require("./FindOneAdoptionController");
const FindAllAdoptionByOwnerController = require("./FindAllAdoptionByOwnerController");
const FindAllAdoptionByUserController = require("./FindAllAdoptionByUserController");

const createAdoptionController = new CreateAdoptionController();
const chooseAdoptionController = new ChooseAdoptionController();
const findOneAdoptionController = new FindOneAdoptionController();
const acceptAdoptionApplyController = new AcceptAdoptionApplyController();
const rejectAdoptionApplyController = new RejectAdoptionApplyController();
const findAllAdoptionByOwnerController = new FindAllAdoptionByOwnerController();
const findAllAdoptionByUserController = new FindAllAdoptionByUserController();

module.exports = {
    createAdoptionController,
    chooseAdoptionController,
    findOneAdoptionController,
    acceptAdoptionApplyController,
    rejectAdoptionApplyController,
    findAllAdoptionByOwnerController,
    findAllAdoptionByUserController,
};
