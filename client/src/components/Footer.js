import React from 'react';

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
      style={{ paddingTop: 120, paddingBottom: 0 }}
    >
      <div className="container">
        <div
          className="row justify-content-center"
          style={{ marginBottom: '2em' }}
        >
          <div className="col">
            <h3 style={{ letterSpacing: 10 }} className="text-center">
              STAY CONNECTED
            </h3>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col text-center">
            <a
              href="https://github.com/MaheshNat"
              target="_blank"
              rel="noopener noreferrer"
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
              target="_blank"
              rel="noopener noreferrer"
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
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:maheshkumar.natamai@gmail.com"
              onClick={(e) => {
                ReactGa.event({
                  category: 'Footer',
                  action: 'Clicked Email icon.',
                });
              }}
            >
              <FontAwesomeIcon icon={faEnvelope} size="3x" />
            </a>
          </div>
          <div className="col text-center">
            <a
              href="https://www.instagram.com/maheshnatamai/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                ReactGa.event({
                  category: 'Footer',
                  action: 'Clicked Instagram icon.',
                });
              }}
            >
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
          </div>
        </div>
        <div
          className="row justify-content-center text-center"
          style={{ marginTop: 82 }}
        >
          <div className="col">
            <p>Website Made By Mahesh Natamai</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
