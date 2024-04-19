const Route = require("express");
const route = new Route();
const controller = require("../Controllers/users.controller");

route.get("/users" , controller.getUsers);
route.get("/user/:id" , controller.getUser);
route.post("/user" , controller.createUser);
route.delete("/user/:id", controller.deleteUser);
route.patch("/user/:id" , controller.updateUser);

module.exports = route;