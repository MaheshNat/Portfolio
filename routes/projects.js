const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

router.get('/', (req, res) => {
  Project.find({}).then((projects) => {
    res.json(projects);
  });
});

// router.post('/', (req, res) => {
//   const project = new Project({
//     title: req.body.title,
//     description: req.body.description,
//     languages: req.body.languages,
//     demoLink: req.body.demoLink,
//     githubLink: req.body.githubLink,
//     devpostLink: req.body.devpostLink,
//     creators: req.body.creators,
//   });
//   project
//     .save()
//     .then((data) => res.json({ message: `Saved project '${req.body.title}'` }))
//     .catch((err) => console.log(err));
// });

module.exports = router;
