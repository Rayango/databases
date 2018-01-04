CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL, username VARCHAR(20) NOT NULL, roomname VARCHAR(20) NOT NULL, message VARCHAR(255) NOT NULL);
-- CREATE TABLE messages (id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL, username_id INTEGER NOT NULL, room_id INTEGER NOT NULL, message VARCHAR(255) NOT NULL);
-- CREATE TABLE rooms (id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL, name VARCHAR(20));
CREATE TABLE users (id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL, username VARCHAR(20) NOT NULL);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

