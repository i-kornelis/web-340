/*
============================================
; Title:  kornelis-exercise-5.3.js
; Author: Izabella Kornelis
; Date:   20 March 2020
; Description: Demonstrates the Pug view engine.
;===========================================
*/

// Start program

// Import express
var express = require("express");
var http = require ("http");
var pug = require("pug");
var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", function(request, response) {
  response.render("index", {
    message: "Welcome to my first Pug page!"
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});

// End program
