const express = require("express");
const path = require("path");
const app = express();

const config = require("./config/config");
const ApiError = require("./utils/ApiError");
const httpStatus = require("http-status");
const morgan = require("./config/morgan");

app.use("/static", express.static("assets"));
app.use(express.urlencoded({ extended: false }));

const apiV1Router = require("./controllers/v1/index");

// Require Error Convertor and Error Handellers
const { errorConverter, errorHandler } = require("./handellers/error");

const port = config.port;

if (config.env !== "test") {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
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
