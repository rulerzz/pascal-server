import { authRouter } from "./auth";
import express from "express";

const apiV1Router = express.Router();

const defaultRoutes = [
  {
    path: "/auth",
    route: authRouter,
  },
];

defaultRoutes.forEach((route) => {
  apiV1Router.use(route.path, route.route);
});

export { apiV1Router };
