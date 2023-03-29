const express = require("express");
const ApiError = require("../../utils/ApiError");
const httpStatus = require("http-status");

const authRouter = express.Router();

authRouter.get("/", function (request, response) {
    response.send("ok")
});

authRouter.get("/:id", function (request, response) {
  response.send(
    "This is main auth controller route withj param value" + request.params.id
  );
});

authRouter.post("/", function (request, response) {
  response.send(
    "This is main auth controller route withj param value" + request.body.id
  );
});

module.exports = authRouter;
