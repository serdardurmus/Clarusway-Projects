// ORM table
// recruite table in the test1 db
const { Sequelize, DataTypes } = require("sequelize");

// connect to db
// postgres://user:pass@example.com:5432/dbname
const { DB_USERNAME, DB_PASSWORD, DB_HOSTNAME, DB_PORT, DB_NAME } = process.env;
const sequelize = new Sequelize(
  `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`
);
sequelize
  .authenticate()
  .then(() => console.log("Successfully connected to database"))
  .catch((err) => console.log("Unable to connect to database", err));

// ORM table
// recruiter table in the clarusway db

// modelname, attribute, options
const UserModel = sequelize.define(
    "recruiter",
    {
      //attributes
      //id, firstName, lastName, createdAt, updatedAt
      firstName: {
        type: DataTypes.STRING,
        allowNull:false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull:false
      },
    },
    {
      // options
      // freezeTableName: true // tablo ismine s eklemek istemiyorsa bunu kullanıyoruz yukarıya da "recruiters" yazıyoruz.
    }
  );
  module.exports = UserModel;