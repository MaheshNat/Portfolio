const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

router.get('/', (req, res) => {
  Project.find({}).then((projects) => {
    res.json(projects);
  });
});

module.exports = router;
