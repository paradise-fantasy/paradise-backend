'use strict';

var router = require('express').Router();

var membersApi = require('./members');
var bluetoothEventsApi = require('./bluetooth-events');
var rpiVitalsApi = require('./rpi-vitals');

router.use('/members', membersApi);
router.use('/bluetooth-events', bluetoothEventsApi);
router.use('/rpi-vitals', rpiVitalsApi);

module.exports = router;