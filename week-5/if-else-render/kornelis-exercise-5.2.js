/*
============================================
; Title:  kornelis-exercise-5.2.js
; Author: Izabella Kornelis
; Date:   19 March 2020
; Description: Demonstrates EJS 'if-else-render' operations.
;===========================================
*/

// Start Program

//Import express
var express = require("express");
var http = require("http");
var path = require("path");

//Create an express app
app = express();

app.set("views",path.resolve(__dirname,"views"));
app.set("view engine", "ejs");

var n = ["Billy", "Cheaka", "Kylie", "Izabella"];

app.get("/", function(request,response) {
  response.render("index", {
    names: n
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!")
});


// End program
