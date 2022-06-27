const express = require("express");
const userRoutes = require("./userRoutes");
const petsRoutes = require("./petsRoutes");
const { authController } = require("../../../../domain/auth/controller/index");
const loginValidation = require("../../../../domain/auth/validation/index");
const UserController = require("../../../../domain/users/controllers/userController");

const routes = express.Router();

routes.post("/login", loginValidation.login, authController.auth);

routes.get("/users", UserController.findAll);
routes.get("/users/:id", UserController.findOne);
routes.post("/users/", UserController.create);
routes.delete("/users/:id", UserController.destroyUser);
routes.put("/users/:id", UserController.alterar);

routes.use(userRoutes);
routes.use(petsRoutes);

module.exports = routes;
