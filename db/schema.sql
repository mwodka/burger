CREATE DATABASE burgers_db
USE burgers_db

CREATE TABLE burgers (
  ID INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(30),
  devoured BOOL,
  PRIMARY KEY (ID)
  )
