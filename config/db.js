const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const password = process.env.DB_PASS;
const user = process.env.DB_USER;
const database = process.env.DB_NAME;

const connection = mysql.createConnection({
  host,
  port,
  user,
  password,
  database
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

function query(sql, params) {
  return new Promise((resolve, reject) => {
    connection.query(sql, params, (err, rows, fields) => {
      if (err) {
        console.error('Error executing SQL query:', err);
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

module.exports = 
  query
