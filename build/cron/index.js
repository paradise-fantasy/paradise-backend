'use strict';

var cron = require('cron');

var _require = require('../postgres');

var pool = _require.pool;

/**
 * Every 60 minutes:
 * - Aggregate results (average)
 * - Delete real-time entries older than 60 minutes
 * @type {cron}
 */

var insertIntervalAverage = function insertIntervalAverage() {
  return pool.query('\n    INSERT INTO rpi_vitals_average (load, mem_total, mem_avail, temperature, disk_avail, disk_total)\n      SELECT\n        ROUND(AVG(load), 2) AS load,\n        ROUND(AVG(mem_total)) AS mem_total,\n        ROUND(AVG(mem_avail)) AS mem_avail,\n        ROUND(AVG(temperature), 1) AS temperature,\n        ROUND(AVG(disk_avail)) AS disk_avail,\n        ROUND(AVG(disk_total)) AS disk_total\n      FROM rpi_vitals_real_time\n      WHERE date > (now() - INTERVAL \'60 minutes\')\n      AND date > (now() - INTERVAL \'120 minutes\')\n  ').then(function () {
    return console.log('inserted average');
  }).catch(function (err) {
    return console.error(err);
  });
};

var deleteOldEntries = function deleteOldEntries() {
  return pool.query('\n    DELETE FROM rpi_vitals_real_time WHERE date < (now() - INTERVAL \'120 minutes\')\n  ').then(function (res) {
    return console.log('Deleted ' + res.rowCount + ' old rows');
  }).catch(function (err) {
    return console.error(err);
  });
};

var rpiVitalsJob = new cron.CronJob({
  cronTime: '00 00 * * * *',
  onTick: function onTick() {
    insertIntervalAverage().then(function () {
      return deleteOldEntries();
    });
  },
  start: true
});