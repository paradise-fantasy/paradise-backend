"use strict";

// Setup Express Server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());

// Setup PostgreSQL connection
require('./postgres');

// Setup API
const API = require('./api');
app.use('/api', API);

// Setup Cron-jobs
require('./cron');

// Configure Socket.io
require('./sockets')(io);

// Start Server
server.listen(app.get('port'), () => console.log('Listening to 3000'));
