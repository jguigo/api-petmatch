const express = require('express');
const cors = require('cors');
const db = require('../database');

db.hasConnection();

const app = express();

app.use(cors());

module.exports = app;
