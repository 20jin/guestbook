var express = require('express');
var router = express.Router();
var uuid = require('uuid');
var pool = require('../src/db-accessor')

/* GET users listing. */
router.get('/', function(req, res, next) {
    pool.connect((err, client, release) => {
        if (err) {
          return console.error('Error acquiring client', err.stack)
        }
        client.query('SELECT * FROM PICTURES', (err, result) => {
          release()
          if (err) {
            console.error('Error executing query', err.stack)
            res.send([]);
            return;
          }
          console.log(result.rows)
          res.send(result.rows);
        })
      })
});

module.exports = router;

