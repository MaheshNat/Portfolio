import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div id="home">
          <div style={{ marginTop: 290 }}>
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
            <h2
              className=""
              style={{ margin: 0, letterSpacing: 15, marginBottom: '1em' }}
            >
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
              <div className="col-xs-12 col-sm-6">
                <h4>Software Development</h4>
                <ul>
                  <li>Front End: Angular, React (Redux), Bootstrap</li>
                  <li>
                    Back End: Node.JS (Express.JS), Flask (Python), MongoDB,
                    Mongoose, Firebase
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-6">
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
