async function main() {
  // get the client
  const mysql = require('mysql2/promise');
  // create the connection
  const connection = await mysql.createConnection({host:'localhost', user: 'admin', database: 'classicmodels', password:'password'});
  // query database
  const [rows, fields] = await connection.execute('SELECT * FROM employees');
  console.log(rows);
}
 main();