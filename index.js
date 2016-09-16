"use strict";

const PORT = process.env.NODE_ENV === 'production' ? 80 : 3000;

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const Pool = require('pg').Pool;

const config = {
  host: 'ec2-79-125-8-175.eu-west-1.compute.amazonaws.com',
  user: 'ambgpbheeejoep',
  password: 'gdA6zm2nErWrmxHMPu_J6nuC-R',
  database: 'da3ls28ln79883',
  ssl: {
    rejectUnauthorized: false
  }
};

const pool = new Pool(config);

app.get('/api/members', (req, res) => {
  pool.query('SELECT * FROM members')
    .then(result => res.json(result.rows))
    .catch(err => res.status(500).json(err))
});

app.get('/api/bluetooth-events', (req, res) => {
  pool.query('SELECT * FROM bluetooth_events')
    .then(result => res.json(result.rows))
    .catch(err => res.status(500).json(err))
});

app.post('/api/bluetooth-events', (req, res) => {
  const type = req.body.type;
  const subject = req.body.subject;

  pool.query('INSERT INTO bluetooth_events (type, subject) VALUES ($1, $2)', [type, subject])
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).json(err))
});

app.listen(3000, () => console.log('Listening to 3000'))
