const CreateAdoptionController = require("./CreateAdoptionController");
const AcceptAdoptionApplyController = require("./AcceptAdoptionApplyController");
const RejectAdoptionApplyController = require("./RejectAdoptionApplyController");
const FindAllAdoptionByOwnerController = require("./FindAllAdoptionByOwnerController");
const FindAllAdoptionByUserController = require("./FindAllAdoptionByUserController");

const createAdoptionController = new CreateAdoptionController();
const acceptAdoptionApplyController = new AcceptAdoptionApplyController();
const rejectAdoptionApplyController = new RejectAdoptionApplyController();
const findAllAdoptionByOwnerController = new FindAllAdoptionByOwnerController();
const findAllAdoptionByUserController = new FindAllAdoptionByUserController();

module.exports = {
    createAdoptionController,
    acceptAdoptionApplyController,
    rejectAdoptionApplyController,
    findAllAdoptionByOwnerController,
    findAllAdoptionByUserController,
};
