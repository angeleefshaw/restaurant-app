const express = require('express');
//const connection = require('./config/connection');
//const orm = require('./config/orm');

var PORT = process.env.PORT || 3001

var app = express();

app.use(express.static("public"));

//parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//routes
var routes = require("./controllers/catscontroller.js");

app.use(routes);

//listener
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
   