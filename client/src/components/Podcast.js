import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faSpotify,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { loadEpisodes } from '../actions/episodeActions';

import ReactGa from 'react-ga';
import Episode from './Episode';
import Spinner from './Spinner';

class Podcast extends Component {
  componentDidMount = () => {
    if (!this.props.episode) this.props.loadEpisodes();
    ReactGa.pageview(window.location.pathname + window.location.search);
  };
  render() {
    return (
      <div className="container">
        <div
          className="jumbotron text-center"
          style={{ marginBottom: '2em', marginTop: '2em' }}
        >
          <h1>The Dogs Of Dalal Street Podcast</h1>
          <div className="row justify-content-center">
            <div style={{ marginBottom: '1em', marginRight: '1em' }}>
              <a
                href="https://open.spotify.com/show/23ZvReiQvkCiFh80aFmkAN"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  ReactGa.event({
                    category: 'Podcast',
                    action: 'Clicked Spotify icon.',
                  });
                }}
              >
                <FontAwesomeIcon icon={faSpotify} size="3x" />
              </a>
            </div>
            <div style={{ marginBottom: '1em', marginRight: '1em' }}>
              <a
                href="https://www.youtube.com/channel/UCFAndC3eZ2XKZ6rvEVgPIPg"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  ReactGa.event({
                    category: 'Podcast',
                    action: 'Clicked Youtube icon.',
                  });
                }}
              >
                <FontAwesomeIcon icon={faYoutube} size="3x" />
              </a>
            </div>
            <div style={{ marginBottom: '1em', marginRight: '1em' }}>
              <a
                href="https://anchor.fm/dalal-street-podcast"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  ReactGa.event({
                    category: 'Podcast',
                    action: 'Clicked Anchor.fm icon.',
                  });
                }}
              >
                <h3>anchor.fm</h3>
              </a>
            </div>
            <div style={{ marginBottom: '1em', marginRight: '1em' }}>
              <a
                href="https://www.instagram.com/dalalstreetpodcast/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  ReactGa.event({
                    category: 'Podcast',
                    action: 'Clicked Instagram icon.',
                  });
                }}
              >
                <FontAwesomeIcon icon={faInstagram} size="3x" />
              </a>
            </div>
            <div style={{ marginBottom: '1em', marginRight: '1em' }}>
              <a
                href="https://www.facebook.com/The-Dogs-of-Dalal-Street-100141311786197/?__tn__=kC-R&eid=ARA45lPHSAmDdj3A-P5EfkvkMYv_k-9SJoaVaQYkkusZemhoAqbdLLcSZe1K81Qr_Nz-tbfRQABa3hPI&hc_ref=ARSgES4mA5ScSjjkDwG7Pxykv_9EkwGbpI_LdUIqW8ubBByd4vW526AtpNnsZf9Jri8&fref=nf&__xts__[0]=68.ARCv8mm0X8jEe_Rq2eQr35IQOQ3gz8_AHtaWEohJ6SyThxTCKLJH53zsuD1O_iozrODoI3NWhCfGmmozr9ZqGcGzAJjk7o0mKkqSeZYn12wskZtT73JgwKMzh1wQ2FDvPCNr0kM4ghJRh7pBxt_0N__0eqlcgONK4kIVnAQWY3LtTv-aMzE33YUq0Z-Orce3b_FoxCxpvI4VQLmHfSHJgfsghfKiibyWJiO6eritRZSpAFeqmQ1DYOUukLpokcWmGvX7ZIXB6_hYYsB8uDGxJ0BX9jgmqbkFmz1y4ztbgwPajGyg2pYL6mKon7FovtNxYECNqs-fb3JvxbJpXtFPYsnXKpDq3Kaf6f-xWWdVSra1fHKmOuEHwC4"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  ReactGa.event({
                    category: 'Podcast',
                    action: 'Clicked Facebook icon.',
                  });
                }}
              >
                <FontAwesomeIcon icon={faFacebook} size="3x" />
              </a>
            </div>
          </div>
          <div
            className="row justify-content-center text-center"
            style={{ marginBottom: '2em' }}
          >
            <img
              src="dods.png"
              alt="Dogs Of Dalal Street Logo"
              className="img-responsive col"
              style={{ maxWidth: 250, height: '100%' }}
            />
          </div>
          <h4>
            A podcast hosted by <span className="text-success">Myself</span>,{' '}
            <span className="text-success">Rutvij Thakkar</span>,{' '}
            <span className="text-success">Harish Jai Ganesh</span>, and{' '}
            <span className="text-success">Raghav Gangatirkar</span>, where we{' '}
            discuss the state of the current{' '}
            <span className="text-success">American economy</span>,{' '}
            <span className="text-success">macroeconomic trends</span>, and
            other <span className="text-success">finance</span> related topics.
          </h4>
        </div>
        <div className="row justify-content-center">
          {this.props.episodes ? (
            this.props.episodes.map((episode) => (
              <div className="col-lg-4 col-md-6 col-xs-12" key={episode._id}>
                <Episode
                  publishedAt={episode.publishedAt}
                  title={episode.title}
                  description={episode.description}
                  url={episode.url}
                />{' '}
              </div>
            ))
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    episodes: state.episodes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadEpisodes: () => {
      dispatch(loadEpisodes());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Podcast);
