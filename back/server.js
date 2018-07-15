"use strict";

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const convertNumberToRomainOne = require("./convertNumberToRomainOne");
const server = express();

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
  server.listen(3000, () => {
    console.log("Example server listening on port 3000!");
  });
};

module.exports = {
  server,
  run,
};
