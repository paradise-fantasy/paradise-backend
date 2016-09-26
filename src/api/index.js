const router = require('express').Router();

const membersApi = require('./members');
const bluetoothEventsApi = require('./bluetooth-events');
const rpiVitalsApi = require('./rpi-vitals');

router.use('/members', membersApi);
router.use('/bluetooth-events', bluetoothEventsApi);
router.use('/rpi-vitals', rpiVitalsApi);

module.exports = router;
