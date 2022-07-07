const express = require("express");
const routes = express.Router();

const auth = require("../../../middleware/auth");
const {
    createAdoptionController,
    acceptAdoptionApplyController,
    rejectAdoptionApplyController,
} = require("../../../../domain/adoption/controller");

routes.post("/adoption/:id", auth, createAdoptionController.create);
routes.post(
    "/adoption/:adoptionId/accept",
    auth,
    acceptAdoptionApplyController.accept,
);
routes.post(
    "/adoption/:adoptionId/reject",
    auth,
    rejectAdoptionApplyController.reject,
);

// routes.put(
//     "/adoption/:id",
//     auth,
//     // validationUser.update,
//     chooseAdoptionController.update,
// );

module.exports = routes;
