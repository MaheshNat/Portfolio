const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  languages: { type: Array },
  demoLink: { type: String },
  githubLink: { type: String },
  devpostLink: { type: String },
  creators: { type: Array, default: ['Mahesh Natamai'] },
});

module.exports = mongoose.model('Projects', ProjectSchema);
