var orm = require("../config/orm.js");

orm.selectAll('cats');
orm.insertOne('cats', 'cat_name');
orm.update('cats', 'petted', 'cat_name')


var cat = {
  all: function(cb) {
    orm.selectAll('cats', function(res) {
      cb(res);
    })
  },
  //insert: function()

  };
  
  // Export the database functions for the controller
  module.exports = cat;
  