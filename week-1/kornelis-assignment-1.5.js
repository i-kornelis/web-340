/*
============================================
; Title: Assignment 1.5
; Author: Izabella Kornelis
; Date: 19 February 2020
; Modified By: Izabella Kornelis
; Description: Demonstrates how to create a Node.js server.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../kornelis-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Assignment 1.3"));
// new line
console.log('\n');

//program start

const http = require('http');

function processRequest(req, res) {
  const body = 'Hello World, how are you today?';

  const contentLength = body.length;

  res.writeHead(200, {
    'Content-Length': contentLength,
    'Content-Type': 'text/plain'
  });

  res.end(body);
}

const s = http.createServer(processRequest);

s.listen(8080);


//end program
