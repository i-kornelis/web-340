/*
============================================
; Title: Assignment 4.3
; Author: Izabella Kornelis
; Date: March 13 2020
; Modified By: Izabella Kornelis
; Description: Demonstrates how to us status codes.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../../kornelis-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Assignment 4.3"));
// new line
console.log('\n');

// program start
var express = require("express");
var http = require("http");

// run express
var app = express();

app.get("/forbidden", function(request, response) {
  response.status(403);
  response.json({
    error: "You do not have authority to access this page."
  });
});

app.get("/bad-gateway", function(request, response) {
  response.status(502);
  response.json({
    error: "Invalid response."
  });
});

app.get("/authentication", function(request, response) {
  response.status(511);
  response.json({
    error: "Network Authentication Required."
  });
});

// load server
http.createServer(app).listen(4040, function(){
  console.log("Application started on port 4040");
});
