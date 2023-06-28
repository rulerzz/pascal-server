"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actor = void 0;
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize("mysql://root:root@localhost:3306/pascal");
const Actor = sequelize.define("Actor", {
    actor_id: sequelize_1.DataTypes.INTEGER,
    first_name: sequelize_1.DataTypes.STRING,
    last_name: sequelize_1.DataTypes.STRING,
    last_update: sequelize_1.DataTypes.DATE,
    test: sequelize_1.DataTypes.STRING,
});
exports.Actor = Actor;
sequelize.sync();
//# sourceMappingURL=actorModel.js.map