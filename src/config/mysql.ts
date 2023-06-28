import mysql from "mysql2";

const connector = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port: 3306,
  database: "sakila",
});

export { connector };
