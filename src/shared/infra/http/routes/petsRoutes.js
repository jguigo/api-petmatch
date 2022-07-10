const express = require("express");
const {
    createPetController,
    findAllPetController,
    findOnePetController,
    findPetByEspecieController,
    updatePetController,
    deletePetController,
} = require("../../../../domain/pets/controller/index");
const validation = require("../../../../domain/pets/validation/index");
const auth = require("../../../middleware/auth");
const upload = require("../../../middleware/upload");

const routes = express.Router();

routes.get("/pets", findAllPetController.findAll);
routes.get("/pets/:id", validation.findOne, findOnePetController.findOne);
routes.get(
    "/pets/especie/:especie",
    validation.findByEspecie,
    findPetByEspecieController.findByEspecie,
);
routes.post(
    "/pets",
    auth,
    upload.imagePet,
    validation.create,
    createPetController.create,
);
routes.put(
    "/pets/:id",
    auth,
    upload.imagePet,
    validation.update,
    updatePetController.update,
);
routes.delete(
    "/pets/:id",
    auth,
    validation.destroy,
    deletePetController.destroy,
);

module.exports = routes;
