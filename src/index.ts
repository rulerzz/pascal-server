import express from "express";
import config from "./config/config";
import ApiError from "./utils/ApiError";
import httpStatus from "http-status";
import morganMiddleware from "./config/morgan";
import { apiV1Router } from "./controllers/v1";
import { errorConverter, errorHandler } from "./handellers/error";

const app = express();

app.use("/static", express.static("assets"));
app.use(express.urlencoded({ extended: false }));

const port = config.port;

if (config.env !== "test") {
  app.use(morganMiddleware);
}

app.use("/api/v1", apiV1Router);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
