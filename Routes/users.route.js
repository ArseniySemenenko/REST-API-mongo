const Route = require("express");
const route = new Route();
const controller = require("../Controllers/users.controller");

route.get("/users" , controller.getUsers);
route.get("/user/:id" , controller.getUser);

module.exports = route;