'use strict';

var router = require('express').Router();

var _require = require('../postgres');

var pool = _require.pool;


router.get('/', function (req, res) {
  pool.query('SELECT * FROM bluetooth_events').then(function (result) {
    return res.json(result.rows);
  }).catch(function (err) {
    return res.status(500).json(err);
  });
});

router.post('/', function (req, res) {
  var type = req.body.type;
  var subject = req.body.subject;

  pool.query('INSERT INTO bluetooth_events (type, subject) VALUES ($1, $2)', [type, subject]).then(function () {
    return res.sendStatus(200);
  }).catch(function (err) {
    return res.status(500).json(err);
  });
});

module.exports = router;