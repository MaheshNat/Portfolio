const mongoose = require('mongoose');

const RepositorySchema = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  language: { type: String },
  stars: { type: Number },
  size: { type: Number },
  lastUpdatedAt: { type: Date },
  createdAt: { type: Date },
  link: { type: String },
});

module.exports = mongoose.model('Repository', RepositorySchema);
