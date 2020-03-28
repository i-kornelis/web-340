/*
============================================
; Title:  kornelis-exercise-6.3.js
; Author: Izabella Kornelis
; Date:   26 March 2020
;Modified By: Izabella Kornelis
; Description: Demonstrates how to setup a MongoDB connection.
;===========================================
*/

//Import express
var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");

// mLab connection
var mongoDB = "mongodb+srv://ikornelis:X2KxpVZOKusVRHj1@buwebdev-cluster-1-9gdfg.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoDB, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function() {
  console.log("Application connected to mLab MongoDB instance");
});

// application
var app = express();
app.use(logger("short"));

// create server
http.createServer(app).listen(8080, function() {
  console.log("Application connected to port 8080!");
});
