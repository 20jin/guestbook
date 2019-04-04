var express = require('express');
var router = express.Router();
var uuid = require('uuid');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let tmpReplies = [
    {
      replyId: uuid.v4(),
      bookId: '1',
      message: '행복하게 잘 살아 ^^! ',
      userName: '김비타민',
      password: '1111',
    },
    {
      replyId: uuid.v4(),
      bookId: '2',
      message: '와 가나',
      userName: '이철분',
      password: '2222',
    },
  ];
  res.send(tmpReplies);
});

module.exports = router;

