const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
  rank: String,
  grade: String,
  channelName: String,
  videoUploads: Number,
  subscribers: Number,
  videoViews: Number
});

module.exports = mongoose.model('Channel', channelSchema);