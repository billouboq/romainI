"use strict";

const request = require("supertest");
const server = require("../../server");

describe("Test convertNumber route", () => {
  test("It should return a romain number", async done => {
    const data = await request(server)
      .post("/convertNumber")
      .send({ number: 5 })
      .expect(200);

    expect(data.body).toBeDefined();
    expect(data.body.result).toBe("V");

    done();
  });
});
