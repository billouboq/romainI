"use strict";

const express = require("express");
const config = require("config");

const initRoutes = require("./routes");
const initMiddlewares = require("./middlewares");

const server = express();
const PORT = config.get("server.port");

initMiddlewares(server);
initRoutes(server);

const run = () => {
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

module.exports = {
  server,
  run,
};
