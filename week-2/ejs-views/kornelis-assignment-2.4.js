/*
============================================
; Title: Assignment 2.4
; Author: Izabella Kornelis
; Date: 27 February 2020
; Modified By: Izabella Kornelis
; Description: Demonstrates how to us Express Framework with routes.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../../kornelis-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Assignment 2.4"));
// new line
console.log('\n');

// program start

// load Express
var express = require("express");
var http = require("http");
var path = require("path");

// initialize the app
let app = express();

app.set("views", path.resolve("week-2/ejs-views", "views"));
app.set("view engine", "ejs");

app.get("/", function(request,response) {
  response.render("index.ejs", {
    firstName: "Izabella",
    lastName: "Kornelis",
    address: "1234 Chestnut Way, Seattle WA "
  });
});

// create server
http.createServer(app).listen(8080, function(){
  console.log("EJS-Views app started on port 8080.");
});

// program end
