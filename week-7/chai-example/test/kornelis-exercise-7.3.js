/*
============================================
; Title:  kornelis-exercise-7.3.js
; Author: Izabella Kornelis
; Date:   3 April 2020
; Description: Demonstrates how to create a Chai test.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../../../kornelis-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Assignment 2.4"));
// new line
console.log('\n');

// program start

var fruits = require("../kornelis-fruits");

var chai = require("chai");
var assert = chai.assert;

describe("fruits", function() {
  it("should return an array of fruits", function() {
    var f = fruits("Apple,Orange,Mango,Pear,Banana");
    assert(Array.isArray(f));
  });
});

// end program
