"use strict";

const convertNumberToRomainOne = require("../convertNumberToRomainOne");

module.exports = (req, res) => {
  const romainNumber = convertNumberToRomainOne(req.body.number);
  res.json({ result: romainNumber });
};
