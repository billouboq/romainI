"use strict";

const express = require("express");
const config = require("config");

const initRoutes = require("./routes");
const initMiddlewares = require("./middlewares");

const server = express();
const PORT = config.get("server.port");

initMiddlewares(server);
initRoutes(server);

module.exports = server;
