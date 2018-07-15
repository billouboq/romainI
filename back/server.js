"use strict";

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const config = require("config");
const convertNumberToRomainOne = require("./convertNumberToRomainOne");
const server = express();

const PORT = config.get("server.port");

const indexHtml = path.resolve(__dirname, "../front/index.html");
const staticFolder = path.resolve(__dirname, "../front");

server.use(bodyParser.json());
server.use("/static", express.static(staticFolder));

server.get("/", (req, res) => {
  res.sendFile(indexHtml);
});

server.post("/convertNumber", (req, res) => {
  const romainNumber = convertNumberToRomainOne(req.body.number);
  res.json({ result: romainNumber });
});

const run = () => {
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

module.exports = {
  server,
  run,
};
