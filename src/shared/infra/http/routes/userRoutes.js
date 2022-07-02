const express = require("express");
const routes = express.Router();
const validationUser = require("../../../../domain/users/validation");
const {
    createUserController,
} = require("../../../../domain/users/controllers/index");
const validation = require("../../../../domain/pets/validation/index");

// routes.get("/users", UserController.findAll);
// routes.get("/users/:id", validation.findOne, UserController.findOne);
routes.post("/users/", validationUser.create, createUserController.create);
// routes.delete("/users/:id", validation.destroy, UserController.destroyUser);
// routes.put("/users/:id", validationUser.update, UserController.alterar);

module.exports = routes;
