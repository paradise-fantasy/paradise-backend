const router = require('express').Router();
const { pool } = require('../postgres');

const { membersUpdated } = require('../sockets/listeners');

router.get('/', membersUpdated, (req, res) => {
  pool.query('SELECT * FROM members')
    .then(result => res.json(result.rows))
    .catch(err => res.status(500).json(err))
});

module.exports = router;
