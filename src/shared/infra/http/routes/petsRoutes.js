const express = require("express");
const { createPetController, findAllPetController, findOnePetController } = require("../../../../domain/pets/controller/index");

const routes = express.Router();

routes.get("/pets", findAllPetController.findAll);
routes.get("/pets/:id", findOnePetController.findOne);

module.exports = routes;
