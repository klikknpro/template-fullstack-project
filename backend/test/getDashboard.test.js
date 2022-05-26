const app = require("../app");
const mockServer = require("supertest");
const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");
const User = require("../model/user");

test("new user gets empty list", async () => {
  // given
  // This will create an new instance of "MongoMemoryServer" and automatically start it
  const mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  const connection = await mongoose.connect(uri);

  /// valami
  const johnDoe = new User({
    username: "johnDoe",
    email: "john@doe.com",
    googleId: "dgsvfhjqbkj657",
  });
  const client = mockServer.agent(app);
  await johnDoe.save();
  client.set("authorization", johnDoe._id);

  // when
  const response = await client.get("/api/dashboards");

  // then
  expect(response.status).toBe(200);
  // const responseData = response.body;
  // console.log(responseData);
  // expect(responseData.user.dashboards).toStrictEqual([]);
  // expect(response.body).toBe();
  await connection.disconnect();
  await mongod.stop();
});
