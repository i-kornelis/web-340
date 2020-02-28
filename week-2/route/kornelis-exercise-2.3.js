/*
============================================
; Title: Exercise 2.3
; Author: Izabella Kornelis
; Date: 26 February 2020
; Modified By: Izabella Kornelis
; Description: Demonstrates how to us Express Framework with routes.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../../kornelis-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Exercise 2.3"));
// new line
console.log('\n');

// program start

var express = require("express");
var http = require("http");

var app = express();

// greets user at homepage
app.get("/", function(request, response){
    response.end("Welcome to the homepage!");
});

// greets user at About page
app.get("/about", function(request, response){
    response.end("Welcome to the About page!");
});

// greets user at Contact page
app.get("/contact", function(request, response){
    response.end("Welcome to the Contact page!");
});

// error

app.use(function(request, response){
    response.statusCode = 404;
    response.end("404!");
});

http.createServer(app).listen(8080);


// program end
