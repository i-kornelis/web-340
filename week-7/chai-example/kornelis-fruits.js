/*
============================================
; Title:  kornelis-fruits.js
; Author: Izabella Kornelis
; Date:   3 April 2020
; Description: Function used in a Chai test.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../../kornelis-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Assignment 2.4"));
// new line
console.log('\n');

// program start

function getFruits(str) {
  return str.split(',');

}

// export fruits
module.exports = getFruits;

// program end
