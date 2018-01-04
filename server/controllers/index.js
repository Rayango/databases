var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, messages) {
        if (err) {
          console.log('error retrieving messages from database', err);
          return;
        } else {
          console.log('messages successfully retrieved!');
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end(JSON.stringify(messages));
        }
      });
    }, 
    post: function (req, res) {
      var message = [
        req.body.username,
        req.body.roomname,
        req.body.message
      ];
      console.log('message...', req.body);
      models.messages.post(message, function(err) {
        if (err) {
          console.log('error posting message to database', err);
          return;
        } else {
          console.log('successfully posted message to database');
        }
      });
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify('post request received!'));
    } 
  },

  users: {
    get: function (req, res) {
      models.users.get(function(err, users) {
        if (err) {
          console.log('error retrieving users from database', err);
          return;
        } else {
          console.log('users successfully retrieved!');
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end(JSON.stringify(users));
        }
      });  
    },
    post: function (req, res) {
      var user = [req.body.username];
      models.users.post(user, function(err) {
        if (err) {
          console.log('error posting user to database', err);
          return;
        } else {
          console.log('successfully posted user to database');
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end('post request received!');
        }
      });
    }  
  }
};

