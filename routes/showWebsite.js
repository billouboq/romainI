"use strict";

const path = require("path");

const indexHtml = path.resolve(__dirname, "../front/index.html");

module.exports = (req, res) => {
  res.sendFile(indexHtml);
};
