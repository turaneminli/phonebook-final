const request = require("supertest");
const app = require("../index");
const User = require("../models/mainModel");
const sequelize = require("../util/database");

const userOne = {
  name: "Max",
  phone: "+1 555 55 55",
};

describe("Main Controller Tests", () => {
  beforeEach(async () => {
    await User.destroy({ where: {} });
  });
  test("DB connection", async () => {
    await request(app)
      .get("/status")
      .expect(200)
      .then((response) => {
        expect(response.body.status).toEqual("OK");
      });
  });

  test("Add user (/POST)", async () => {
    await request(app)
      .post("/user/add")
      .send({
        name: "Turan",
        phone: "+99451 5550000",
      })
      .expect(201);
  });

  test("Add user fail (/POST)", async () => {
    await request(app)
      .post("/user/add")
      .send({
        name: "Turan",
        phone: "+99451 5550000",
      })
      .expect(201);
  });

  test("Edit user (/PUT)", async () => {
    const newUser = await User.create(userOne);

    await request(app)
      .put("/user/" + newUser.id)
      .send({ name: "George", phone: "+994 99 123 4567" })
      .expect(200);
  });

  test("Could not find user (/PUT)", async () => {
    const newUser = await User.create(userOne);

    await request(app)
      .put("/user/" + 5)
      .send({ name: "George", phone: "+994 99 123 4567" })
      .expect(404);
  });

  test("Delete user (/DELETE)", async () => {
    const newUser = await User.create(userOne);

    await request(app)
      .delete("/user/" + newUser.id)
      .expect(200)
      .then(async () => {
        expect(await User.findOne({ where: { id: newUser.id } })).toBeFalsy();
      });
  });

  test("Could not find user - Delete user (/DELETE)", async () => {
    const newUser = await User.create(userOne);

    await request(app)
      .delete("/user/5")
      .then((result) => {
        expect(result.body.error).toEqual("Could not find the user.");
      });
  });

  test("Get the list of users (/GET)", async () => {
    const newUser = await User.create(userOne);

    await request(app)
      .get("/user/list")
      .expect(200)
      .then((response) => {
        //   testing the array of the response data
        expect(response.body.users.length).toEqual(1);

        // testing the request body data
        expect(response.body.users[0].user_id).toEqual(newUser.id);
      });
  });
});
