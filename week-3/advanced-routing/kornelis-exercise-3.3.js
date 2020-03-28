/*
============================================
; Title: Assignment 3.3
; Author: Izabella Kornelis
; Date: March 5 2020
; Modified By: Izabella Kornelis
; Description: Demonstrates how to us advanced routing in Express Framework.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../../kornelis-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display("Izabella", "Kornelis", "Assignment 3.3"));
// new line
console.log('\n');

// program start
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

// call Express
var app = express();

// tell Express is in the "views" directory
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/:employeeId", function(request, response) {
  var employeeId = parseInt(request.params.employeeId, 10);

  response.render("index", {
    employeeId: employeeId
  });
});

http.createServer(app).listen(8080, function(){
  console.log("Application started on port 8080");
});

// end program

;myFunction_propertyA = {

	myFunction: function()
	{
		console.log('myFunction...');
	}

}
myFunction_propertyA.myFunction();
