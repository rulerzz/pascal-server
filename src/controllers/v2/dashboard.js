const express = require("express");
const ApiError = require("../../utils/ApiError");
const httpStatus = require("http-status");

const dashboardRoute = express.Router();

dashboardRoute.get("/", function (request, response) {
  response.send("apiv2ok")
});

dashboardRoute.get("/:id", function (request, response) {
  response.send(
    "This is main auth controller route withj param value" + request.params.id
  );
});

dashboardRoute.post("/", function (request, response) {
  response.send(
    "This is main auth controller route withj param value" + request.body.id
  );
});

module.exports = dashboardRoute;
