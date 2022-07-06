const express = require("express");
const routes = express.Router();
// const validationUser = require("../../../../domain/users/validation");
// const validation = require("../../../../domain/pets/validation/index");
const auth = require("../../../middleware/auth");
const {
    createAdoptionController,
    findAllAdoptionController,
    findOneAdoptionController,
    deleteAdoptionController,
    updateAdoptionController,
} = require("../../../../domain/adoption/controllers/index");

routes.get("/adoption", findAllAdoptionController.findAll);
routes.get(
    "/adoption/:id",
    // validation.findOne,
    findOneAdoptionController.findOne,
);
routes.post(
    "/adoption/",
    // validationUser.create,
    createAdoptionController.create,
);
routes.delete(
    "/adoption/:id",
    // validation.destroy,
    deleteAdoptionController.findOne,
);
routes.put(
    "/adoption/:id",
    auth,
    // validationUser.update,
    updateAdoptionController.update,
);

module.exports = routes;
