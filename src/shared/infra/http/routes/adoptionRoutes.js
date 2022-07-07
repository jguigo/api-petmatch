const express = require("express");
const routes = express.Router();

const auth = require("../../../middleware/auth");
const {
    createAdoptionController,
} = require("../../../../domain/adoption/controller");

routes.post("/adoption/:id", auth, createAdoptionController.create);

// routes.put(
//     "/adoption/:id",
//     auth,
//     // validationUser.update,
//     chooseAdoptionController.update,
// );

module.exports = routes;
