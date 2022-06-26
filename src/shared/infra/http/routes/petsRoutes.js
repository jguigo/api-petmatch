const express = require("express");
const {
    createPetController,
    findAllPetController,
    findOnePetController,
    updatePetController,
    deletePetController,
} = require("../../../../domain/pets/controller/index");
const validation = require("../../../../domain/pets/validation/index");
const auth = require("../../../middleware/auth");

const routes = express.Router();

routes.get("/pets", findAllPetController.findAll);
routes.get("/pets/:id", validation.findOne, findOnePetController.findOne);
routes.post("/pets", auth, validation.create, createPetController.create);
routes.put("/pets/:id", auth, validation.update, updatePetController.update);
routes.delete("/pets/:id", auth, validation.destroy, deletePetController.destroy);

module.exports = routes;
