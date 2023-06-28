"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
const actorModel_1 = require("../../models/actorModel");
const authRouter = express_1.default.Router();
exports.authRouter = authRouter;
authRouter.get("/", function (request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield actorModel_1.Actor.findAll();
            response.send(JSON.stringify(users));
        }
        catch (e) {
            response.send(e);
        }
    });
});
authRouter.get("/:id", function (request, response) {
    response.send("This is main auth controller route withj param value" + request.params.id);
});
authRouter.post("/", function (request, response) {
    response.send("This is main auth controller route withj param value" + request.body.id);
});
//# sourceMappingURL=auth.js.map