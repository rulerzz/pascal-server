import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("mysql://root:root@localhost:3306/pascal");

const Actor = sequelize.define("Actor", {
  actor_id: DataTypes.INTEGER,
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  last_update: DataTypes.DATE,
  test: DataTypes.STRING,
});

sequelize.sync();

export { Actor };
