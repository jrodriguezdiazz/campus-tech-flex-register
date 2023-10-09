const {createPool} = require('mysql2/promise');
const credentials = require('./credentials');
const {parseMysql2Response} = require('./utils');
const pool = createPool(credentials);

async function executeQuery(query, params = []) {
  try {
    console.log({query});
    return await pool.query(query, params);
  } catch (error) {
    throw error;
  }
}

async function getAllValues() {
  const query = 'SELECT * FROM `values`;';
  const response = await executeQuery(query);
  return parseMysql2Response(response);
}

async function insertValue(value) {
  const query = 'INSERT INTO `values` (value) VALUES (?)';
  return executeQuery(query, [value]);
}

async function ping() {
  return executeQuery(`SELECT NOW() as now`);
}

module.exports = {
  getAllValues, insertValue, ping
};
