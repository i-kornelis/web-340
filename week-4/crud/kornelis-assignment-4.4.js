/*
============================================
; Title:  kornelis-assignment-4.4.js
; Author: Professor Krasso
; Date:   15 March 2020
;Modified By: Izabella Kornelis
; Description: Demonstrates CRUD operations in a
;              Node.js API.
;===========================================
*/

//Import express
var express = require("express");
var http = require("http");

//Create an express app
var app = express();

//Create GET, POST, PUT, and DELETE requests with a console message to send in the response
app.get("/", function(request, response) {
  response.send("API invoked as an HTTP GET request.");
});

app.put("/", function(request, response) {
  response.send("API invoked as an HTTP PUT request.");
});

app.post("/", function(request, response) {
  response.send("API invoked as an HTTP POST request");
});

app.delete("/", function(request, response) {
  response.send("API invoked as an HTTP DELETE request");
});

//Start the application on port 8080
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
