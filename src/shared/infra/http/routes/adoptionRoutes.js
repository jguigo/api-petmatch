const express = require("express");
const routes = express.Router();
// const validationUser = require("../../../../domain/users/validation");
// const validation = require("../../../../domain/pets/validation/index");
const auth = require("../../../middleware/auth");
const {
    createAdoptionController,
    chooseAdoptionController,
} = require("../../../../domain/adoption/controllers/index");

routes.post(
    "/adoption/",
    // validationUser.create,
    createAdoptionController.create,
);

routes.put(
    "/adoption/:id",
    auth,
    // validationUser.update,
    chooseAdoptionController.update,
);

module.exports = routes;
