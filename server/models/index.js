var db = require('../db');
var request = require('request');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * FROM messages', function(err, messages) {
        callback(err, messages);
      });
    },
    post: function (message, callback) {
      db.query('INSERT INTO messages (username, roomname, message) VALUES(?, ?, ?)', message, function(err) {
        callback(err);
      });
    } 
  },
  users: {
    get: function (callback) {
      db.query('SELECT * FROM users', function(err, users) {
        callback(err, users);
      });
    },
    post: function (username, callback) {
      db.query('INSERT INTO users (username) VALUES (?)', username, function(err) {
        callback(err);
      });
    }
  }
};

