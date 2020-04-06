/*
============================================
; Title:  kornelis-assignment-5.4.js
; Author: Izabella Kornelis
; Date:   23 March 2020
; Description: Server file for the ems application
;===========================================
*/
// Start program

// Require statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var mongoose = require('mongoose');
var Employee = require('./models/employee');


// Establishes a database connection to MongoDB).
const mongoDB = 'mongodb+srv://new-user_1:o8n81IUQvMXblbik@buwebdev-cluster-1-9gdfg.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Application connected to MongoDB instance');
});

// start new app
var app = express();

// views directory
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));

//model
var employee = new Employee({
  firstName: "employeeFirstName",
  lastName: "employeeLastName"
});

app.get("/", function (request, response) {

    response.render("index", {
        title: "Home page"
    });

});

app.get("/views/list", function (request, response) {

  response.render("list", {
      title: "List View"
  });

});

app.get("/views/new", function (request, response) {

  response.render("new", {
      title: "Create New Employee"
  });

});

app.get("/views/view", function (request, response) {

  response.render("view", {
      title: "View Employee Details"
  });

});

// Create Server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});
