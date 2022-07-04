const express = require("express");
const routes = express.Router();
const validationUser = require("../../../../domain/users/validation");
const validation = require("../../../../domain/pets/validation/index");
const auth = require("../../../middleware/auth");
const {
    createUserController,
    findAllUserController,
    findOneUserController,
    findByEmailUserController,
    deleteUserController,
    updateUserController,
} = require("../../../../domain/users/controllers/index");

routes.get("/users", findAllUserController.findAll);
routes.get("/users/:id", validation.findOne, findOneUserController.findOne);
routes.post("/users/", validationUser.create, createUserController.create);
routes.get("/users/email/:email", findByEmailUserController.findOne);
routes.delete("/users/:id", validation.destroy, deleteUserController.findOne);
routes.put(
    "/users/:id",
    auth,
    validationUser.update,
    updateUserController.update,
);

module.exports = routes;
