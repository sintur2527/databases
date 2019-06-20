var db = require('../db');

module.exports = {
  messages: {
    get: function(result) {
      db.query('SELECT * FROM messages', (err, res) => {
        if (err) {
          console.error(err);
          result(null, err);
        } else {
          // console.log('result :', result);
          result(null, res);
        }
      });
    }, // a function which produces all the messages
    post: function({ message, username, roomname }, result) {
      db.query(
        'INSERT INTO messages (message, username, roomname) VALUES (?, ?, ?)',
        [message, username, roomname],
        (err, res) => {
          if (err) {
            console.error(err);
            result(null, err);
          } else {
            result(null, res.insertId);
          }
        }
      );
    }, // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function(callback) {
      db.query('SELECT username FROM users', (err, res) => {
        if (err) {
          console.error(err);
          callback(null, err);
        } else {
          callback(null, res);
        }
      });
    },
    post: function({ username }, result) {
      db.query(
        'INSERT INTO users (username) VALUES ?',
        [username],
        (err, res) => {
          if (err) {
            console.error(err);
            result(null, err);
          } else {
            result(null, res.insertId);
          }
        }
      );
    },
  },
};
