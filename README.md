# burger

A simple burger logger that uses MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Following the MVC design pattern; using Node and MySQL to query and route data, and Handlebars to generate HTML.

## Installation

**disclaimer:** these instructions assume you have node and MySQL installed

1. Clone or download this repository
2. In the project directory, run 
```npm install```
3. Create and setup the MySQL database:
  * Run the contents of db\schema.sql 
```sql
CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS burgers;

# Create the burgers table
CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured BOOL DEFAULT false,
PRIMARY KEY (id)
);
```
  * Run the contents of db\seeds.sql 
```sql
INSERT INTO burgers (burger_name, devoured) VALUES ('Cheese Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Hamburger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Pizza Burger', FALSE);
```
4. Run the following in the project folder: ```node server.js```
5. Direct your web browser to 127.0.0.1:3000