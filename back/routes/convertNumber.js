"use strict";

const convertNumberToRomainOne = require("../services/convertNumberToRomainOne");

module.exports = (req, res) => {
  const romainNumber = convertNumberToRomainOne(req.body.number);
  res.json({ result: romainNumber });
};
