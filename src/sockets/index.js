import listeners from './listeners';

const configure = (io) => {
  console.log('STARTED');
  io.on('connection', () => {
    console.log('HELLO');
  });

  listeners.on(listeners.MEMBERS_UPDATED, (members) => {
    io.emit('event', { members })
  })
}

module.exports = configure;
