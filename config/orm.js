var connection = require('./connection.js');

// object relational mapper (ORM)

var orm = {
	selectAll: function (tableInput) {
		var queryString = 'SELECT * FROM ' + tableInput;
		connection.query(queryString, function (err, result) {
			console.log(result);
      return result;
		});
	},
	insertOne: function (table, whatToInsert) {
		var queryString = 'INSERT INTO ' + table + '("burger_name")' + VALUES + (whatToInsert);
		console.log(queryString);
		connection.query(queryString, function (err, result) {
			console.log(result);
      return result;
		});
	},
	updateOne: function (table, name) {
		var queryString = UPDATE + table + SET 'devoured'=true WHERE burger_name=name;
		connection.query(queryString, function (err, result) {
			console.log(result);
      return result;
		});
	}
};

module.exports = orm;
