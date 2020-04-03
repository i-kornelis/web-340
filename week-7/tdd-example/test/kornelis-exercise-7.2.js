/*
============================================
; Title:  kornelis-exercise-7.2.js
; Author: Izabella Kornelis
; Date:   3 April 2020
; Description: Demonstrations how to create a TDD unit test.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../../../kornelis-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Assignment 2.4"));
// new line
console.log('\n');

// program start

var assert = require("assert");

describe("string#split", function() {
  it("should return an array of fruits", function() {
    assert(Array.isArray("Apple,Orange,Mango".split(",")));
  });
});

function getFruits(str) {

  return str.split(',');

 }

 module.exports = getFruits;

// program end
