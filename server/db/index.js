var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var db = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat',
});

db.connect(err => {
  if (err) {
    throw err;
  } else {
    console.log('Connected!');
  }
});

module.exports = db;
