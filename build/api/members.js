'use strict';

var router = require('express').Router();

var _require = require('../postgres');

var pool = _require.pool;


router.get('/', function (req, res) {
  pool.query('SELECT * FROM members').then(function (result) {
    return res.json(result.rows);
  }).catch(function (err) {
    return res.status(500).json(err);
  });
});

module.exports = router;