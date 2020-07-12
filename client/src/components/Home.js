import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

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
    this.main = React.createRef();
  }

  componentDidMount() {
    ReactGa.pageview(window.location.pathname + window.location.search);
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div>
        <div id="home">
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
              <span className="text-success">machine learning</span>, and{' '}
              <span className="text-success">data science</span>.
            </h4>
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
              <h2>Read More</h2>
              <FontAwesomeIcon icon={faAngleDoubleDown} size="3x" />
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
