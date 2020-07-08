const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cron = require('cron');
const { Octokit } = require('@octokit/rest');
const Repository = require('./models/Repository');

const PORT = process.env.PORT || 8080;

const app = express();
const githubRouter = require('./routes/github');
const contactRouter = require('./routes/contact');

// Register middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use('/github', githubRouter);
app.use('/contact', contactRouter);

if (process.env.NODE_ENV === 'production')
  app.use(express.static('client/build'));

//Connect To Database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }, () => {
  console.log('mongoDB Connected');
});

//Schedule Cron Job
const octokit = new Octokit();
cron.job(
  process.env.UPDATE_SCHEDULE,
  () => {
    Repository.deleteMany({}).then((res) => {
      octokit.repos.listForUser({ username: 'MaheshNat' }).then(({ data }) => {
        data.forEach((repo) => {
          const _repo = new Repository({
            title: repo.name,
            description: repo.description,
            language: repo.language,
            stars: repo.stargazers_count,
            size: repo.size,
            lastUpdatedAt: repo.updated_at,
            createdAt: repo.created_at,
            link: repo.html_url,
          });
          _repo.save();
        });
        res.json({ message: 'Updated all github repositories.' });
      });
    });
  },
  undefined,
  true,
  process.env.TIME_ZONE
);

app.listen(PORT);
