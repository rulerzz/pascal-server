const authRoute = require("./auth");
const dashboardRoute = require("./dashboard");
const express = require("express");

const apiV2Router = express.Router();

const defaultRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/dashboard",
    route: dashboardRoute,
  }
];

defaultRoutes.forEach((route) => {
  apiV2Router.use(route.path, route.route);
});

module.exports = apiV2Router;
