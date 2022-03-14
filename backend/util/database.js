const Sequelize = require("sequelize");
require("dotenv").config();

// const database = process.env.SQL_DATABASE_NAME;
// const username = process.env.SQL_USERNAME;
// const password = process.env.SQL_PASSWORD;

const database = "phonebookdb"
const username = "phonebook_admin"
const password = "sqlMy2022Phonebook"

const sequelize = new Sequelize(database, username, password, {
  host: "mydb.ch9lxjtadwif.us-east-1.rds.amazonaws.com",
  dialect: "mysql",
  port: 3306,
});

module.exports = sequelize;
