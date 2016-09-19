"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());

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

app.get('/api/rpi-vitals', (req, res) {
  pool.query('SELECT * FROM rpi_vitals ORDER BY date DESC LIMIT 1')
    .then(() => res.json(res.rows[0]))
    .catch(err => res.status(500).json(err));
})

app.post('/api/rpi-vitals-events', (req, res) => {
  const load = parseFloat(req.body.load);
  const temperature = parseFloat(req.body.temperature);
  const memTotal = parseInt(req.body.mem_total);
  const memAvail = parseInt(req.body.mem_avail);
  const diskTotal = parseInt(req.body.disk_total);
  const diskAvail = parseInt(req.body.disk_avail);

  pool.query('INSERT INTO rpi_vitals(load, mem_total, mem_avail, temperature, disk_total, disk_avail) VALUES ($1, $2, $3, $4, $5, $6)', [load, memTotal, memAvail, temperature, diskTotal, diskAvail])
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).json(err))
});

app.listen(app.get('port'), () => console.log('Listening to 3000'))
