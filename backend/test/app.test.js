const app = require("../app");
const mockServer = require("supertest");
const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");
const { request } = require("../app");

describe("post request to /user", () => {
  describe("given a username and password", () => {
    test("should respond with a status code 200", async () => {
      //given
      const client = mockServer(app);
      //when
      const response = await client.post("/user").send({
        username: "username",
        password: "password",
      });
      expect(response.statusCode).toBe(200);
    });
  });
});
