/*
============================================
; Title:  kornelis-assignment-7.4.js
; Author: Izabella Kornelis
; Date:   4 April 2020
; Description: File for Employee database model
;===========================================
*/

// Start program

// Require statements
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Employee Schema
let EmployeeSchema = new Schema( {
  firstName: {type: String, required: true},
  lastName: {type: String, required: true}
});

// Export the model
module.exports = mongoose.model("Employee", EmployeeSchema)


// End Program
