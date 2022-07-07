const CreateAdoptionController = require("./CreateAdoptionController");
const ChooseAdoptionController = require("./ChooseAdoptionController");
const FindOneAdoptionController = require("./FindOneAdoptionController");
const AcceptAdoptionApplyController = require("./AcceptAdoptionApplyController");
const RejectAdoptionApplyController = require("./RejectAdoptionApplyController");

const createAdoptionController = new CreateAdoptionController();
const chooseAdoptionController = new ChooseAdoptionController();
const findOneAdoptionController = new FindOneAdoptionController();
const acceptAdoptionApplyController = new AcceptAdoptionApplyController();
const rejectAdoptionApplyController = new RejectAdoptionApplyController();

module.exports = {
    createAdoptionController,
    chooseAdoptionController,
    findOneAdoptionController,
    acceptAdoptionApplyController,
    rejectAdoptionApplyController,
};
