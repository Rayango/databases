CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (id INTEGER PRIMARY KEY, username VARCHAR(20), room VARCHAR(20), message VARCHAR(255));
CREATE TABLE rooms (id INTEGER PRIMARY KEY, name VARCHAR(20));
CREATE TABLE users (id INTEGER PRIMARY KEY, name VARCHAR(20));

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

