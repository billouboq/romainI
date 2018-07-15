"use strict";

const fs = require("fs-extra");
const path = require("path");
const request = require("supertest");
const server = require("../../server");

const htmlFile = path.resolve(__dirname + "../../../front/index.html");

describe("Test showWebsiteRoute", () => {
  test("It should return website html", async done => {
    const expected = await fs.readFile(htmlFile, "utf8");
    const data = await request(server)
      .get("/")
      .send({ number: 5 })
      .expect(200);

    expect(data.text).toBe(expected);

    done();
  });
});
