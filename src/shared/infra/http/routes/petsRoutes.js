const express = require("express");
const { createPetController, findAllPetController, findOnePetController } = require("../../../../domain/pets/controller/index");

const routes = express.Router();

routes.get("/pets", findAllPetController.findAll);

module.exports = routes;
