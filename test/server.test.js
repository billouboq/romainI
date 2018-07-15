"use strict";

const request = require("supertest");
const server = require("../server");

describe("Test server", () => {
  test("It should test server is running", () => {
    return request(server)
      .get("/")
      .expect(200);
  });
});
