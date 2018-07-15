"use strict";

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const config = require("config");
const server = express();
const initRoutes = require("./routes");

const PORT = config.get("server.port");

const staticFolder = path.resolve(__dirname, "../front");

server.use(bodyParser.json());
server.use("/static", express.static(staticFolder));

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
