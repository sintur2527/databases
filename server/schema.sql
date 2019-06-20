DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INT AUTO_INCREMENT NOT NULL,
  message VARCHAR(140),
  username INT NULL DEFAULT NULL,
  roomname VARCHAR(20),
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id INT AUTO_INCREMENT,
  username VARCHAR(20) DEFAULT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE messages ADD FOREIGN KEY (username) REFERENCES users(id);
/* ALTER TABLE messages ADD FOREIGN KEY (roomID) REFERENCES rooms(id);
ALTER TABLE friends ADD FOREIGN KEY (userId) REFERENCES users(id);
ALTER TABLE friends ADD FOREIGN KEY (friendID) REFERENCES users(id); */

INSERT INTO messages (message, roomname) VALUES 
('how are you?', 'lobby'),
('whats up', 'lobby'),
('call me', 'lobby');

INSERT INTO users (username) VALUES 
('kawhi'),
('steph'),
('anthony');


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/