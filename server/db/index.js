var mysql = require('mysql');
var Sequelize = require('Sequelize');
var orm = new Sequelize('chat', 'root', '');

// var User = orm.define('User', {
//   username: Sequelize.STRING
// });

// var Message = orm.define('Messages', {
//   text: Sequelize.STRING,
//   room: Sequelize.STRING
// });

// User.hasMany(Message);
// Message.belongsTo(User);

// User.sync();
// Message.sync();

// exports.User = User;
// exports.Message = Message;

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});

dbConnection.connect();

module.exports = dbConnection;

