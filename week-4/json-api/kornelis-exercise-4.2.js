/*
============================================
; Title: Assignment 4.2
; Author: Izabella Kornelis
; Date: March 13 2020
; Modified By: Izabella Kornelis
; Description: Demonstrates how to us key-value pairs.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../../kornelis-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Assignment 4.2"));
// new line
console.log('\n');

// program start
var express = require ('express');
var http = require('http');

var app = express()
app.get("/customer/:id", function (request, response){
  var id = parseInt(request.params.id, 10);

  response.json({
    name: "Billy Cat",
    age: "2",
    tagId: id
  });
});

// create server

http.createServer(app).listen(3000, function() {
  console.log("Application started on port 3000");
});
// end program
