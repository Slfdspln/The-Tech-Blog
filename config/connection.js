// Dotenv import
require("dotenv").config();

// Sequelize import
const Sequelize = require("sequelize");

// Allows for environmental variables to be used
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: "127.0.0.1",
      dialect: "mysql",
      dialectOptions: {
        decimalNumbers: true,
      },
    });

// Sequelize export
module.exports = sequelize;