const express = require("express");
const userRoutes = require("./userRoutes");
const petsRoutes = require("./petsRoutes");
const { authController } = require("../../../../domain/auth/controller/index");
const loginValidation = require("../../../../domain/auth/validation/index");
const UserController = require("../../../../domain/users/controllers/userController");
const validation = require("../../../../domain/pets/validation/index");
const validationUser = require("../../../../domain/users/validation");

const routes = express.Router();

routes.post("/login", loginValidation.login, authController.auth);

routes.get("/users", UserController.findAll);
routes.get("/users/:id", validation.findOne, UserController.findOne);
routes.post("/users/", validationUser.create, UserController.create);
routes.delete("/users/:id", validation.destroy, UserController.destroyUser);
routes.put("/users/:id", validationUser.update, UserController.alterar);

routes.use(userRoutes);
routes.use(petsRoutes);

module.exports = routes;
