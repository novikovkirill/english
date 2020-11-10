const router = require('express').Router();
const { words } = require('./mock');
const { reply } = require('./utils');

router.get('/words', (req, res, next) => {
  reply(res, words);
});

module.exports = router;