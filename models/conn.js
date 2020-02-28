const pgp = require("pg-promise")({
  query: function(e) {}
});

const options = {
  host: process.env.HOST,
  port: 5432,
  database: process.env.DB
  // username: process.env.USER,
  // password: process.env.PW
};

const db = pgp(options);
module.exports = db;
