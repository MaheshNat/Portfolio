import React from 'react';

import { Link } from 'react-router-dom';

import ReactGa from 'react-ga';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer
      className="footer bg-secondary"
      style={{ paddingTop: 120, paddingBottom: 120 }}
    >
      <div className="container">
        <div
          className="row justify-content-center"
          style={{ marginBottom: '2em' }}
        >
          <div className="col-xs-12">
            <h3 style={{ letterSpacing: 10 }}>STAY CONNECTED</h3>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col text-center">
            <a
              href="https://github.com/MaheshNat"
              onClick={(e) => {
                ReactGa.event({
                  category: 'Footer',
                  action: 'Clicked GitHub icon.',
                });
              }}
            >
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
          </div>
          <div className="col text-center">
            <a
              href="https://www.linkedin.com/in/mahesh-natamai-b17683188/"
              onClick={(e) => {
                ReactGa.event({
                  category: 'Footer',
                  action: 'Clicked LinkedIn icon.',
                });
              }}
            >
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
          </div>
          <div className="col text-center">
            <Link
              to="/contact"
              onClick={(e) => {
                ReactGa.event({
                  category: 'Footer',
                  action: 'Clicked Email icon.',
                });
              }}
            >
              <FontAwesomeIcon icon={faEnvelope} size="3x" />
            </Link>
          </div>
          <div
            className="col text-center"
            onClick={(e) => {
              ReactGa.event({
                category: 'Footer',
                action: 'Clicked Instagram icon.',
              });
            }}
          >
            <a href="https://www.instagram.com/maheshnatamai/">
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
