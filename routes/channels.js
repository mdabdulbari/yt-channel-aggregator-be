var express = require('express');
var router = express.Router();
var Channel = require('../models/channel');

const PAGE_SIZE = 15;

// GET channels
router.get('/', function(req, res, next) {
  const pageNumber = req.query.pageNumber || 1;
  Channel.find().skip((pageNumber - 1) * PAGE_SIZE).limit(PAGE_SIZE).exec().then((channels) => {
    res.json(channels);
  });
});

router.get('/channel', function(req, res, next) {
  const rank = req.query.rank
  console.log(rank);
  Channel.findOne({ rank: rank}).exec().then((channels) => {
    res.json(channels);
  });
});

module.exports = router;
