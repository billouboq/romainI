"use strict";

const showWebsite = require("./showWebsite");
const convertNumber = require("./convertNumber");

module.exports = server => {
  server.get("/", showWebsite);
  server.post("/convertNumber", convertNumber);
};
