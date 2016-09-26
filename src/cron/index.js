const cron = require('cron');
const { pool } = require('../postgres');

/**
 * Every 60 minutes:
 * - Aggregate results (average)
 * - Delete real-time entries older than 60 minutes
 * @type {cron}
 */
const insertIntervalAverage = () =>
  pool.query(`
    INSERT INTO rpi_vitals_average (load, mem_total, mem_avail, temperature, disk_avail, disk_total)
      SELECT
        ROUND(AVG(load), 2) AS load,
        ROUND(AVG(mem_total)) AS mem_total,
        ROUND(AVG(mem_avail)) AS mem_avail,
        ROUND(AVG(temperature), 1) AS temperature,
        ROUND(AVG(disk_avail)) AS disk_avail,
        ROUND(AVG(disk_total)) AS disk_total
      FROM rpi_vitals_real_time
      WHERE date > (now() - INTERVAL '60 minutes')
      AND date > (now() - INTERVAL '120 minutes')
  `)
  .then(() => console.log('inserted average'))
  .catch(err => console.error(err))

const deleteOldEntries = () =>
  pool.query(`
    DELETE FROM rpi_vitals_real_time WHERE date < (now() - INTERVAL '120 minutes')
  `)
  .then(res => console.log(`Deleted ${res.rowCount} old rows`))
  .catch(err => console.error(err))

const rpiVitalsJob = new cron.CronJob({
  cronTime: '00 00 * * * *',
  onTick: () => {
    insertIntervalAverage()
    .then(() => deleteOldEntries())
  },
  start: true
});
