/*
============================================
; Title: Exercise 1.3
; Author: Izabella Kornelis
; Date: 19 February 2020
; Modified By: Izabella Kornelis
; Description: A simple JavaScript program using Node.js to work with modules.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../kornelis-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Exercise 1.1"));
// new line
console.log('\n');

//program start

var url = require('url')

var parsedURL = url.parse("https://www.example.com/profile?name=kornelis");

// output
console.log(parsedURL.protocol);

console.log(parsedURL.host);

console.log(parsedURL.query);


//end program
