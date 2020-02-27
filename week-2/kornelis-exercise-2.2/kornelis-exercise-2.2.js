/*
============================================
; Title: Assignment 2.2
; Author: Izabella Kornelis
; Date: 26 February 2020
; Modified By: Izabella Kornelis
; Description: Demonstrates how to us Express Framework.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../kornelis-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Assignment 2.2"));
// new line
console.log('\n');

// program start

var http = require("http");

var app = express();

app.use(function(request,response){
    console.log("in comes a request to:" + request.url);

     response.end("Hello World");
});

http.createServer(app).listen(8080);
