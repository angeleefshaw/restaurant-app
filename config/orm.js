const connection = require('./connection');


var orm = {
    selectAll: function(tableName, cb) {
      var queryString = "SELECT * FROM " + tableName + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        console.log(result);
      });
    },
    
    insertOne: function(tableName, catName, cb) {
      var queryString = "INSERT INTO " + tableName + "(cat_name, petted)";

      queryString += " VALUES (";
      queryString += catName;
      queryString += ", false)";
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        console.log(result);
      });
    },
  
    update: function(table, condition, catName, cb) {
      var queryString = "UPDATE " + table;
  
      queryString += " SET petted = ";
      queryString += condition;
      queryString += " WHERE cat_name = ";
      queryString += catName;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        console.log(result);
      });
    },
  
  };
  
  module.exports = orm;
  