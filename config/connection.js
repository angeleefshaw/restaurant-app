var mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port, if not 3306
    port: 3306,
  
    // Your MySQL username
    user: 'root',
  
    // Your MySQL password
    password: 'vbsixseven97vbzxAs!',
  
    // Name of database
    database: 'burger_db'
  });

module.exports = connection;
