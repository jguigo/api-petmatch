const express = require("express");
const routes = express.Router();

const auth = require("../../../middleware/auth");
const {
    findAllAdoptionByOwnerController,
    findAllAdoptionByUserController,
    createAdoptionController,
    acceptAdoptionApplyController,
    rejectAdoptionApplyController,
} = require("../../../../domain/adoption/controller");
const adoptionValidation = require("../../../../domain/adoption/validation");

routes.get(
    "/adoption/owner",
    auth,
    findAllAdoptionByOwnerController.findAllByOwnerId,
);
routes.get(
    "/adoption/user",
    auth,
    findAllAdoptionByUserController.findAllByUserId,
);
routes.post(
    "/adoption/:petId",
    auth,
    adoptionValidation.create,
    createAdoptionController.create,
);
routes.post(
    "/adoption/:adoptionId/accept",
    auth,
    adoptionValidation.acceptAndReject,
    acceptAdoptionApplyController.accept,
);
routes.post(
    "/adoption/:adoptionId/reject",
    auth,
    adoptionValidation.acceptAndReject,
    rejectAdoptionApplyController.reject,
);

module.exports = routes;
