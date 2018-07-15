"use strict";

const express = require("express");

const initRoutes = require("./routes");
const initMiddlewares = require("./middlewares");

const server = express();

initMiddlewares(server);
initRoutes(server);

module.exports = server;
