const router = require('express').Router();
const { reply } = require('./utils');

router.get('/words', (req, res, next) => {
	const Datastore = require('nedb');
	const db = new Datastore({filename : 'words'});
	db.loadDatabase();
	db.find({}, function (err, docs) {
		reply(res, docs);
	});
});

module.exports = router;