import express from "express";
import { Actor } from "../../models/actorModel";
const authRouter = express.Router();

authRouter.get("/", async function (request, response) {
  try {
    const users = await Actor.findAll();
    response.send(JSON.stringify(users));
  } catch (e) {
    response.send(e);
  }
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

export { authRouter };
