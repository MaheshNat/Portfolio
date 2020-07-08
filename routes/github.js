const express = require('express');
const router = express.Router();
const Repository = require('../models/Repository');

router.get('/', (req, res) => {
  Repository.find({}).then((repos) => {
    res.json(repos);
  });
});

module.exports = router;
