const router = require('express').Router();
const { pool } = require('../postgres');

router.get('/', (req, res) => {
  pool.query('SELECT * FROM bluetooth_events')
    .then(result => res.json(result.rows))
    .catch(err => res.status(500).json(err))
});

router.post('/', (req, res) => {
  const type = req.body.type;
  const subject = req.body.subject;

  pool.query('INSERT INTO bluetooth_events (type, subject) VALUES ($1, $2)', [type, subject])
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).json(err))
});

module.exports = router;
