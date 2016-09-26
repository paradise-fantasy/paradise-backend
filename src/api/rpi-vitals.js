const router = require('express').Router();
const { pool } = require('../postgres');

router.get('/', (req, res) => {
  pool.query('SELECT * FROM rpi_vitals_real_time ORDER BY date DESC LIMIT 1')
    .then(result => res.json(result.rows[0]))
    .catch(err => res.status(500).json(err));
})

router.post('/', (req, res) => {
  const load = parseFloat(req.body.load);
  const temperature = parseFloat(req.body.temperature);
  const memTotal = parseInt(req.body.mem_total);
  const memAvail = parseInt(req.body.mem_avail);
  const diskTotal = parseInt(req.body.disk_total);
  const diskAvail = parseInt(req.body.disk_avail);

  pool.query('INSERT INTO rpi_vitals_real_time(load, mem_total, mem_avail, temperature, disk_total, disk_avail) VALUES ($1, $2, $3, $4, $5, $6)', [load, memTotal, memAvail, temperature, diskTotal, diskAvail])
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).json(err))
});

module.exports = router;
