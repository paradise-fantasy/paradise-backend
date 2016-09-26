"use strict";

// Setup Express Server

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Setup PostgreSQL connection
require('./postgres');

// Setup API
var API = require('./api');
app.use('/api', API);

// Setup Cron-jobs
require('./cron');

// Start Express Server
app.listen(app.get('port'), function () {
  return console.log('Listening to 3000');
});