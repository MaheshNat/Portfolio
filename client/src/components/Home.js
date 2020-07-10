import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import ReactGa from 'react-ga';

export default class Home extends Component {
  componentDidMount() {
    ReactGa.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <div>
        <div id="home">
          <div style={{ marginTop: 290, padding: '2em' }} className="bg-dark">
            <span
              style={{
                display: 'table',
                position: 'absolute',
                left: 0,
              }}
            >
              <div className="col">
                <div style={{ marginBottom: '1em' }}>
                  <a
                    href="https://www.instagram.com/maheshnatamai/"
                    onClick={(e) => {
                      ReactGa.event({
                        category: 'Home',
                        action: 'Clicked Instagram icon.',
                      });
                    }}
                  >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                </div>

                <div style={{ marginBottom: '1em' }}>
                  <a
                    href="https://github.com/MaheshNat"
                    onClick={(e) => {
                      ReactGa.event({
                        category: 'Home',
                        action: 'Clicked Github icon.',
                      });
                    }}
                  >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                </div>
                <div style={{ marginBottom: '1em' }}>
                  <a
                    href="https://www.linkedin.com/in/mahesh-natamai-b17683188/"
                    onClick={(e) => {
                      ReactGa.event({
                        category: 'Home',
                        action: 'Clicked LinkedIn icon.',
                      });
                    }}
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                </div>
                <div>
                  <Link
                    to="/contact"
                    onClick={(e) => {
                      ReactGa.event({
                        category: 'Home',
                        action: 'Clicked Email icon.',
                      });
                    }}
                  >
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                  </Link>
                </div>
              </div>
            </span>
            <h1 className="text-center" style={{ letterSpacing: 15 }}>
              MAHESH NATAMAI
            </h1>
            <h4 className="text-center">
              High school junior self-learning{' '}
              <span className="text-success">software engineering</span>,{' '}
              <span className="text-success">machine learning</span>, and{' '}
              <span className="text-success">data science</span>.
            </h4>
            <div className="row justify-content-center text-center">
              <Link
                to="/projects"
                className="col-xs-12 col-md-2"
                style={{ marginBottom: '1em' }}
              >
                <button
                  type="button"
                  className="btn btn-outline-success btn-lg"
                >
                  Projects
                </button>
              </Link>
              <Link
                to="/resume"
                className="col-xs-12 col-md-2"
                style={{ marginBottom: '1em' }}
              >
                <button
                  type="button"
                  className="btn btn-outline-success btn-lg"
                >
                  Resume
                </button>
              </Link>
              <Link
                to="/software"
                className="col-xs-12 col-md-2"
                style={{ marginBottom: '1em' }}
              >
                <button
                  type="button"
                  className="btn btn-outline-success btn-lg"
                >
                  Software
                </button>
              </Link>
              <Link
                to="/contact"
                className="col-xs-12 col-md-2"
                style={{ marginBottom: '1em' }}
              >
                <button
                  type="button"
                  className="btn btn-outline-success btn-lg"
                >
                  Contact
                </button>
              </Link>
            </div>
          </div>
          <div
            style={{ marginTop: 300, marginBottom: 41 }}
            className="text-center"
          >
            <h2>Read More</h2>
            <FontAwesomeIcon icon={faAngleDoubleDown} size="3x" />
          </div>
        </div>
        <div
          className="bg-dark"
          style={{ paddingTop: 100, paddingBottom: 100 }}
        >
          <div className="container">
            <h2 style={{ margin: 0, letterSpacing: 15, marginBottom: '1em' }}>
              ABOUT ME
            </h2>
            <p style={{ fontSize: 20, marginBottom: '1em' }}>
              I'm a current high school junior at the School Of Science And
              Engineering At Townview Magnet Center in Dallas, TX. I'm
              interested in web development, machine learning, data science, app
              development, as well as robotics, and have been teaching myself
              these topics.
            </p>
            <div className="row justify-content-center">
              <div className="col-xs-12 col-sm-6 col-lg-4">
                <h4>Web Development</h4>
                <ul>
                  <li>Front End: Angular, React (Redux), Bootstrap</li>
                  <li>
                    Back End: Node.JS (Express.JS), Flask (Python), MongoDB,
                    Mongoose, Firebase
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-6 col-lg-4">
                <h4>Machine Learning / Data Science</h4>
                <ul>
                  <li>
                    Technologies: Python, Numpy, Tensorflow (Keras), Matplotlib,
                    Octave
                  </li>
                  <li>
                    Concepts: Machine Learning (Linear / Logistic Regression),
                    Deep Learning (Neural Networks, CNNs, RNNs (LSTMs))
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-6 col-lg-4">
                <h4>Robotics</h4>
                <ul>
                  <li>FTC Robotics (Java), OpenCV (Java, Python)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
