'use strict';

var router = require('express').Router();

var _require = require('../postgres');

var pool = _require.pool;


router.get('/', function (req, res) {
  pool.query('SELECT * FROM rpi_vitals_real_time ORDER BY date DESC LIMIT 1').then(function (result) {
    return res.json(result.rows[0]);
  }).catch(function (err) {
    return res.status(500).json(err);
  });
});

router.post('/', function (req, res) {
  var load = parseFloat(req.body.load);
  var temperature = parseFloat(req.body.temperature);
  var memTotal = parseInt(req.body.mem_total);
  var memAvail = parseInt(req.body.mem_avail);
  var diskTotal = parseInt(req.body.disk_total);
  var diskAvail = parseInt(req.body.disk_avail);

  pool.query('INSERT INTO rpi_vitals_real_time(load, mem_total, mem_avail, temperature, disk_total, disk_avail) VALUES ($1, $2, $3, $4, $5, $6)', [load, memTotal, memAvail, temperature, diskTotal, diskAvail]).then(function () {
    return res.sendStatus(200);
  }).catch(function (err) {
    return res.status(500).json(err);
  });
});

module.exports = router;