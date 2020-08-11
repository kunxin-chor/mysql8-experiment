var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : 'password',
  database : 'classicmodels'
});

connection.connect();

// connection.query('SELECT * FROM employees', function (error, results, fields) {
//     console.log(results);
// });

async function getData() {
    let results = await connection.query("SELECT * FROM employees");
    console.log(results);
    return results;
}


