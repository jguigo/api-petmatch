const express = require("express");
const cors = require("cors");
const db = require("../database");
const routes = require("./routes/index");
const handleError = require("../../middleware/handleError");

db.hasConnection();

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes);

app.use(handleError);

module.exports = app;
