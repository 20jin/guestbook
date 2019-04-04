var pg = require('pg')
var dbConfig = require('./config/cockroach-config');
var pool = new pg.Pool(dbConfig);
module.exports = pool;
