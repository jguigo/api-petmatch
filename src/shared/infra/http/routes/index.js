const express = require("express");
const userRoutes = require("./userRoutes");
const petsRoutes = require("./petsRoutes");
const { authController } = require("../../../../domain/auth/controller/index");
const loginValidation = require("../../../../domain/auth/validation/index");
const validation = require("../../../../domain/pets/validation/index");

const routes = express.Router();

routes.post("/login", loginValidation.login, authController.auth);

routes.use(userRoutes);
routes.use(petsRoutes);

module.exports = routes;
