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

// start new app
var app = express();

// views directory
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));

app.get("/", function (request, response) {

    response.render("index", {
        title: "Home page"
    });

});

app.get("/list", function (request, response) {

  response.render("list", {
      title: "List View"
  });

});

app.get("/new", function (request, response) {

  response.render("new", {
      title: "Create New Employee"
  });

});

app.get("/view", function (request, response) {

  response.render("view", {
      title: "View Employee Details"
  });

});

// Create Server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});
