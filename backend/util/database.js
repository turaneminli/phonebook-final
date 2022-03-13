const Sequelize = require("sequelize");
require("dotenv").config();

const database = process.env.SQL_DATABASE_NAME;
const username = process.env.SQL_USERNAME;
const password = process.env.SQL_PASSWORD;

const sequelize = new Sequelize(
  "phonebookdb",
  "phonebook_admin",
  "sqlMy2022Phonebook",
  {
    host: "mydb.ch9lxjtadwif.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = sequelize;
