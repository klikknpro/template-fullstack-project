require("dotenv").config();
const app = require("../app");
const jwt = require("jsonwebtoken");
const mockServer = require("supertest");
// const { MongoMemoryServer } = require("mongodb-memory-server");
const User = require("../model/user");
const { startDb, stopDb, deleteAll } = require("./util/inMemoryDb");

describe("POST requests to api/user/login", () => {
  let connection;
  let server;
  let client;

  beforeAll(async () => {
    const result = await startDb();
    connection = result[0];
    server = result[1];
    client = mockServer.agent(app);
  });

  afterEach(async () => {
    await deleteAll(User);
  });

  afterAll(async () => {
    await stopDb(connection, server);
  });

  test("should return 400 without body", async () => {
    // given

    // when
    const response = await client.post("/api/user/login").send({});

    // then
    expect(response.status).toBe(400);
  });

  test("should return 400 without provider", async () => {
    // given
    const code = "random";

    // when
    const response = await client.post("/api/user/login").send({ code });

    // then
    expect(response.status).toBe(400);
  });

  test("should return 400 without code", async () => {
    // given
    const provider = "github";

    // when
    const response = await client.post("/api/user/login").send({ provider });

    // then
    expect(response.status).toBe(400);
  });

  test("should return 400 with invalid provider (user not created)", async () => {
    // given
    const code = "random";
    const provider = "gitlab";

    // when
    const response = await client.post("/api/user/login").send({
      code,
      provider,
    });

    // then
    expect(response.status).toBe(400);
  });
});
