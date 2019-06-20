var models = require('../models');

module.exports = {
  messages: {
    get: function(req, res) {
      models.messages.get((err, message) => {
        // console.log('controller');
        if (err) {
          res.send(err);
        }
        // console.log('res', { results: message });
        res.status(200).send({ results: message });
      });
    }, // a function which handles a get request for all messages
    post: function(req, res) {
      var newMessage = req.body;
      models.messages.post(newMessage, (err, messageId) => {
        if (err) {
          res.send(err);
        }
        newMessage.objectId = messageId;
        res.status(201).send(newMessage);
      });
    }, // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function(req, res) {
      models.users.get((err, username) => {
        if (err) {
          res.send(err);
        }
        console.log('username :', username);
        res.status(200).send(username);
      });
    },
    post: function(req, res) {
      var newUser = req.body;
      models.users.post(newUser, (err, userId) => {
        if (err) {
          res.send(err);
        }
        newUser.objectId = userId;
        res.status(201).send(newUser);
      });
    },
  },
};
