const Pool = require('pg').Pool;

const config = {
  host: 'ec2-79-125-8-175.eu-west-1.compute.amazonaws.com',
  user: 'ambgpbheeejoep',
  password: 'gdA6zm2nErWrmxHMPu_J6nuC-R',
  database: 'da3ls28ln79883',
  ssl: {
    rejectUnauthorized: false
  }
};

const pool = new Pool(config);

module.exports = { pool };
