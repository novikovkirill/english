const router = require('express').Router();
const moment = require('moment');
const { reply } = require('./utils');

router.get('/words', (req, res, next) => {
	const Datastore = require('nedb');
	const db = new Datastore({filename : 'words'});
	db.loadDatabase();
	db.find({}, function (err, docs) {
		reply(res, docs);
	});
});

router.post('/timer', function (req, res, next) {
  try {
	const Datastore = require('nedb');
	const db = new Datastore({filename : 'timer'});
	db.loadDatabase();
	db.insert({time: moment().minutes(0).seconds(req.body.time).format('mm:ss'), date: moment().format('DD.MM.YYYY')});
	return reply(res, 'ok');
  } catch (error) {
    return reply(res, error.toString(), 400);
  }
});

router.post('/words', function (req, res, next) {
  try {
	const Datastore = require('nedb');
	const db = new Datastore({filename : 'words'});
	db.loadDatabase();
	const { russian, english } = req.body.word;
	db.insert({russian, english});
	return reply(res, 'ok');
  } catch (error) {
    return reply(res, error.toString(), 400);
  }
})

module.exports = router;