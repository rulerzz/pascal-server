const authRoute = require("./auth");
const express = require("express");

const apiV1Router = express.Router();

const defaultRoutes = [
  {
    path: "/auth",
    route: authRoute,
  }
];

defaultRoutes.forEach((route) => {
  apiV1Router.use(route.path, route.route);
});

module.exports = apiV1Router;
