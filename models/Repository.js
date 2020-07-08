const mongoose = require('mongoose');
const RepositorySchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  language: { type: String, required: true },
  stars: { type: Number, required: true },
  size: { type: Number, required: true },
  lastUpdatedAt: { type: Date, required: true },
  createdAt: { type: Date, required: true },
  link: { type: String, required: true },
});
module.exports = mongoose.model('Repos', RepositorySchema);
