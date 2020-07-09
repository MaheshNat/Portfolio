import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

export default class Home extends Component {
  render() {
    return (
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
              <button type="button" className="btn btn-outline-success btn-lg">
                Projects
              </button>
            </Link>
            <Link
              to="/software"
              className="col-xs-12 col-md-2"
              style={{ marginBottom: '1em' }}
            >
              <button type="button" className="btn btn-outline-success btn-lg">
                Software
              </button>
            </Link>
            <Link
              to="/contact"
              className="col-xs-12 col-md-2"
              style={{ marginBottom: '1em' }}
            >
              <button type="button" className="btn btn-outline-success btn-lg">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div
          style={{ marginTop: 300, marginBottom: 93 }}
          className="text-center"
        >
          <h2>Read More</h2>
          <FontAwesomeIcon icon={faAngleDoubleDown} size="3x" />
        </div>
      </div>
    );
  }
}
