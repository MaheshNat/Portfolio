const express = require('express');
const cors = require('cors');
const axios = require('axios').default;
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const CronJob = require('cron').CronJob;
const { Octokit } = require('@octokit/rest');
const Repository = require('./models/Repository');

const PORT = process.env.PORT || 8080;

const app = express();
const githubRouter = require('./routes/github');
const contactRouter = require('./routes/contact');
const projectsRouter = require('./routes/projects');

// Register middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use('/api/github', githubRouter);
app.use('/api/contact', contactRouter);
app.use('/api/projects', projectsRouter);

app.use('/api/resume', (req, res) => {
  res.download('./assets/mahesh-natamai-resume.pdf');
});

app.use('/api/ping', (req, res) => {
  res.send(`Ping ${Date.now()}`);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//Connect To Database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }, () => {
  console.log('mongoDB Connected');
});

//Schedule Cron Job
const octokit = new Octokit();
const awakeJob = new CronJob(
  process.env.PING_SCHEDULE,
  () => {
    axios.get('http://mnat.herokuapp.com/api/ping').then((res) => {});
  },
  null,
  true,
  process.env.TIME_ZONE,
  null,
  true
);
awakeJob.start();

const job = new CronJob(
  process.env.UPDATE_SCHEDULE,
  () => {
    console.log('starting cron job...');
    Repository.deleteMany({})
      .then((res) => {
        octokit.repos
          .listForUser({ username: process.env.GITHUB_USERNAME })
          .then(({ data }) => {
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
          })
          .then((res) => console.log('Updated all github repositories.'))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  },
  null,
  true,
  process.env.TIME_ZONE,
  null,
  true
);
job.start();

app.listen(PORT);
