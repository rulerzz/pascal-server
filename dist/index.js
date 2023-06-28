"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config/config"));
const ApiError_1 = __importDefault(require("./utils/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const morgan_1 = __importDefault(require("./config/morgan"));
const v1_1 = require("./controllers/v1");
const error_1 = require("./handellers/error");
const app = (0, express_1.default)();
app.use("/static", express_1.default.static("assets"));
app.use(express_1.default.urlencoded({ extended: false }));
const port = config_1.default.port;
if (config_1.default.env !== "test") {
    app.use(morgan_1.default);
}
app.use("/api/v1", v1_1.apiV1Router);
// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    next(new ApiError_1.default(http_status_1.default.NOT_FOUND, "Not found"));
});
// convert error to ApiError, if needed
app.use(error_1.errorConverter);
// handle error
app.use(error_1.errorHandler);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map