"use strict";

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const staticFolder = path.resolve(__dirname, "../front");

module.exports = server => {
  server.use(bodyParser.json());
  server.use("/static", express.static(staticFolder));
};
