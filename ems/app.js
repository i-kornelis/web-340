/*
============================================
; Title:  kornelis-assignment-5.4.js
; Author: Izabella Kornelis
; Date:   23 March 2020
; Description: Server file for the ems application
;===========================================
*/
// Start program
// Require statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var csrf = require('csurf');
var mongoose = require('mongoose');
var Employee = require('./models/employee');

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

// Morgan logger
app.use(logger('short'));
// Body parser
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
// Cookie parser
app.use(cookieParser());
// Helmet
app.use(helmet.xssFilter());
// CSRF protection
app.use(csrfProtection);
/**
 * Intercepts all incoming requests and adds a CSRF token to the response.
 */
app.use(function(req, res, next) {
  var token = req.csrfToken();
  res.cookie('XSRF-TOKEN', token);
  res.locals.csrfToken = token;
  next();
});

/**
 * Sets up the view engine, view's directory path, and the server port.
 */
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8080);

/**
 * Description: Redirects users to the 'index' page.
 * Type: HttpGet
 * Request: n/a
 * Response: index.ejs, Fruit[]
 * URL: localhost:8080
 */
app.get('/', function(req, res) {
  Employee.find({}, function(err, employee) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employee);
      res.render('index', {
        title: 'EMS | Home',
        employee: employee
      })
    }
  });
});

/**
 * Description: Redirects users to the 'new' page.
 * Type: HttpGet
 * Request: n/a
 * Response: new.ejs
 * URL: localhost:8080/new
 */
app.get('/new', function(req, res) {
  res.render('new', {
    title: 'EMS | New'
  });
});

/**
 * Description: Processes a form submission.
 * Type: HttpPost
 * Request: textName
 * Response: index.ejs
 * URL: localhost:8080/process
 */
app.post('/process', function(req, res) {
  // console.log(request.body.txtName);
  if (!req.body.txtName) {
    res.status(400).send('Entries must have a name');
    return;
  }

  // get the request's form data
  const employeeName = req.body.txtName;
  console.log(employeeName);

  // create a fruit model
  let fruit = new Fruit({
    name: employeeName
  });

  // save
  employee.save(function(err) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employeeName + ' saved successfully!');
      res.redirect('/');
    }
  });
});

/**
 * Description: Redirects users to the 'home' page'
 * Type: HttpGet
 * Request: queryName
 * Response: view.ejs, Employee[] | index.ejs
 * URL: localhost:8080/view/:queryName
 */
app.get('/view/:queryName', function(req, res) {
  const queryName = req.params['queryName'];

  Fruit.find({'name': queryName}, function(err, employee) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(fruits);

      if (fruits.length > 0) {
        res.render('view', {
          title: 'EMS | View',
          fruit: fruits
        })
      } else {
        res.redirect('/');
      }
    }
  })
});

app.get("/", function (request, response) {

    response.render("index", {
        title: "Home page"
    });

});

// Create Server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});
