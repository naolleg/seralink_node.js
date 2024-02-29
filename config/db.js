const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

const query = (sql, params) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, params, (err, rows, fields) => {
      if (err) {
        console.error('Error executing SQL query:', err);
        reject(err);
        console.log(err);
      } else {
        resolve(rows);
        return rows;
      }
    });
  });
};

module.exports = query;