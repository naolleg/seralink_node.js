const mysql = require("mysql");

const createConnection = () => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "job",
    password: "1234",
    database: "jsp",
  });

  connection.connect((err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Connected to the database");
    }
  });

  return (req, res, next) => {
    req.dbConnection = connection;
    next();
  };
};

module.exports = createConnection();