"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connector = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const connector = mysql2_1.default.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 3306,
    database: "sakila",
});
exports.connector = connector;
//# sourceMappingURL=mysql.js.map