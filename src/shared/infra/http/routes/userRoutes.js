const express = require("express");
const routes = express.Router();
const validationUser = require("../../../../domain/users/validation");
const validation = require("../../../../domain/pets/validation/index");
const {
    createUserController,
    findAllUserController,
    findOneUserController,
    findByEmailUserController,
} = require("../../../../domain/users/controllers/index");

routes.get("/users", findAllUserController.findAll);
routes.get("/users/:id", validation.findOne, findOneUserController.findOne);
routes.post("/users/", validationUser.create, createUserController.create);
routes.get("/users/email/:email", findByEmailUserController.findOne);
// routes.delete("/users/:id", validation.destroy, UserController.destroyUser);
// routes.put("/users/:id", validationUser.update, UserController.alterar);

module.exports = routes;
