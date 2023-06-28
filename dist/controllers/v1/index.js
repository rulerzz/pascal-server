"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiV1Router = void 0;
const auth_1 = require("./auth");
const express_1 = __importDefault(require("express"));
const apiV1Router = express_1.default.Router();
exports.apiV1Router = apiV1Router;
const defaultRoutes = [
    {
        path: "/auth",
        route: auth_1.authRouter,
    },
];
defaultRoutes.forEach((route) => {
    apiV1Router.use(route.path, route.route);
});
//# sourceMappingURL=index.js.map