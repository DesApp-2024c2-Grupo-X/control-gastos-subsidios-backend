const path = require('path');
const debug = require('debug');
const dotenv = require('dotenv');

function getEnvironment() {
  return process.env.NODE_ENV || 'development';
}

function initializeEnv() {
  dotenv.config({
    path: path.resolve(process.cwd(), `.env.${getEnvironment()}`),
  });
}

function normalizePort(val) {
  const portNum = parseInt(val, 10);
  if (Number.isNaN(portNum)) {
    // named pipe
    return val;
  }
  if (portNum >= 0) {
    // port number
    return portNum;
  }
  return false;
}

function initializeConfig() {
  const environment = getEnvironment();
  let dbConfig = {
    username: process.env.SQL_USERNAME,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
    host: process.env.SQL_HOST,
    port: process.env.SQL_PORT,
    dialect: 'postgresql',
    logging: debug('sequelize'),
  };
  if (environment === 'development') {
    dbConfig.seederStorage = 'sequelize';
  }

  return {
    db: dbConfig,
    port: normalizePort(process.env.PORT || '3001'),
  };
}

initializeEnv();
module.exports = initializeConfig();
