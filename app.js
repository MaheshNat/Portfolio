const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const CronJob = require('cron').CronJob;
const { Octokit } = require('@octokit/rest');
const YouTube = require('simple-youtube-api');
const Repository = require('./models/Repository');
const Episode = require('./models/Episode');

const PORT = process.env.PORT || 8080;

const app = express();
const contactRouter = require('./routes/contact');
const projectsRouter = require('./routes/projects');

// Register middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use('/api/contact', contactRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/episodes', (req, res) => {
  Episode.find({}).then((episodes) => {
    res.json(episodes);
  });
});
app.use('/api/github', (req, res) => {
  Repository.find({}).then((repos) => {
    res.json(repos);
  });
});

app.use('/api/resume', (req, res) => {
  res.download('./assets/mahesh-natamai-resume.pdf');
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res, next) => {
    if (req.protocol === 'http') {
      res.redirect('https://' + req.headers.host + req.url);
      next();
    }
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//Connect To Database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }, () => {
  console.log('mongoDB Connected');
});

//Schedule Cron Jobs
const youtube = new YouTube(process.env.YOUTUBE_API_KEY);
const youtubeJob = new CronJob(
  process.env.YOUTUBE_UPDATE_SCHEDULE,
  () => {
    console.log('starting youtube cron job...');
    Episode.deleteMany({})
      .then((res) => {
        youtube
          .searchVideos('The Dogs Of Dalal Street Podcast', process.env.VIDEOS)
          .then((videos) => {
            videos
              .filter((video) => video.channel.id === process.env.CHANNEL_ID)
              .forEach((episode) => {
                console.log(episode);
                const _episode = new Episode({
                  title: episode.title,
                  description: episode.description,
                  url: episode.url,
                  publishedAt: episode.publishedAt,
                });
                _episode.save();
              });
          });
      })
      .catch((err) => console.log(err));
  },
  null,
  true,
  process.env.TIME_ZONE,
  null,
  true
);
youtubeJob.start();

const octokit = new Octokit();
const githubJob = new CronJob(
  process.env.GITHUB_UPDATE_SCHEDULE,
  () => {
    console.log('starting github cron job...');
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
githubJob.start();

app.listen(PORT);
