import React, { Component } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import LinkContainer from 'react-router-bootstrap';

import WAVES from 'vanta/dist/vanta.waves.min';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import ReactGa from 'react-ga';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.home = React.createRef();
    this.main = React.createRef();
  }

  componentDidMount() {
    ReactGa.pageview(window.location.pathname + window.location.search);
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    WAVES({
      el: this.home.current,
      mouseControls: true,
      touchControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x886f,
      shininess: 30.0,
      waveHeight: 13.5,
      waveSpeed: 1.1,
      zoom: 0.8,
    });
  }

  componentWillMount() {}

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div>
        <div id="home" ref={this.home}>
          <div
            style={{
              marginTop:
                (this.state.height -
                  (70 +
                    101 +
                    (this.main.current !== null
                      ? this.main.current.clientHeight
                      : 0))) /
                2,
              padding: '2em',
            }}
            className="bg-dark"
            ref={this.main}
          >
            <div className="row justify-content-center">
              <div style={{ marginBottom: '1em', marginRight: '1em' }}>
                <a
                  href="https://www.instagram.com/maheshnatamai/"
                  target="_blank"
                  rel="noopener noreferrer"
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

              <div style={{ marginBottom: '1em', marginRight: '1em' }}>
                <a
                  href="https://github.com/MaheshNat"
                  target="_blank"
                  rel="noopener noreferrer"
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
              <div style={{ marginBottom: '1em', marginRight: '1em' }}>
                <a
                  href="https://www.linkedin.com/in/mahesh-natamai-b17683188/"
                  target="_blank"
                  rel="noopener noreferrer"
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
              <div style={{ marginBottom: '1em', marginRight: '1em' }}>
                <a
                  href="mailto:maheshkumar.natamai@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    ReactGa.event({
                      category: 'Home',
                      action: 'Clicked Email icon.',
                    });
                  }}
                >
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
              </div>
              <div style={{ marginBottom: '1em' }}>
                <a
                  href="http://mnat.herokuapp.com/api/resume"
                  onClick={(e) => {
                    ReactGa.event({
                      category: 'Home',
                      action: 'Clicked Resume icon.',
                    });
                  }}
                >
                  <FontAwesomeIcon icon={faFile} size="2x" />
                </a>
              </div>
            </div>
            <h1 className="text-center" style={{ letterSpacing: 15 }}>
              MAHESH NATAMAI
            </h1>
            <h4 className="text-center" style={{ marginBottom: '1em' }}>
              High school junior self-learning{' '}
              <span className="text-success">software engineering</span>,{' '}
              <span className="text-success">machine learning</span>,{' '}
              <span className="text-success">robotics</span>, and{' '}
              <span className="text-success">data science</span>.
            </h4>
            <div className="row justify-content-center text-center">
              <button
                onClick={() => {
                  this.props.history.push('/projects');
                }}
                type="button"
                className="btn btn-outline-success btn-lg"
                style={{ marginRight: '2em' }}
              >
                Projects
              </button>
              <button
                onClick={() => {
                  this.props.history.push('/resume');
                }}
                type="button"
                className="btn btn-outline-success btn-lg"
              >
                Resume
              </button>
            </div>
          </div>
          <div
            style={{
              marginTop:
                (this.state.height -
                  (70 +
                    101 +
                    (this.main.current !== null
                      ? this.main.current.clientHeight
                      : 0))) /
                2,
              marginBottom: 2,
            }}
            className="text-center"
          >
            <ScrollLink
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {this.state.height > 600 && (
                <h2 style={{ cursor: 'pointer' }}>Read More</h2>
              )}
              <FontAwesomeIcon
                icon={faAngleDoubleDown}
                size="3x"
                style={{ cursor: 'pointer' }}
              />
            </ScrollLink>
          </div>
        </div>
        <div
          id="about"
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
