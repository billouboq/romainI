"use strict";

const convert = require("../../services/convertNumberToRomainOne");

const testNumber = (input, expected, end) => {
  expect(convert(input)).toBe(expected);
  end();
};

describe("Test convertNumberToRomainOne", () => {
  it("Should convert 4 to IV", done => {
    testNumber(4, "IV", done);
  });

  it("Should convert 3000 to MMM", done => {
    testNumber(3000, "MMM", done);
  });

  it("Should convert 4444 to MMMMCDXLIV", done => {
    testNumber(4444, "MMMMCDXLIV", done);
  });
});
