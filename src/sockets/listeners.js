import { pool } from '../postgres';

const listenForFinish = callback => (req, res, next) => {
  res.on('finish', callback);
  next();
}

// Members Updated
const MEMBERS_UPDATED = 'membersUpdated';
const membersUpdatedListeners = [];
const membersUpdated = listenForFinish(() => {
  pool.query('SELECT * FROM members')
    .then(result => result.rows)
    .then(members => membersUpdatedListeners.forEach(callback => callback(members)));
});

const on = (eventType, callback) => {
  switch (eventType) {
    default:
      membersUpdatedListeners.push(callback);
  }
}

module.exports = {
  MEMBERS_UPDATED,
  membersUpdated,
  on
};
