const mongoose = require('mongoose');
const EpisodeSchema = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  url: { type: String },
  publishedAt: { type: Date },
});
module.exports = mongoose.model('Episode', EpisodeSchema);
