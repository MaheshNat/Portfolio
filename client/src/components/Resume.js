import React, { useState } from 'react';
import resume from '../assets/images/Resume.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function Resume() {
  const [pages, setPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <div className="container">
      <div
        className="jumbotron text-center"
        style={{ marginBottom: '2em', marginTop: '2em' }}
      >
        <h1>
          Resume{' '}
          <a href={`${process.env.REACT_APP_BASE_URL}/resume`}>
            <FontAwesomeIcon icon={faDownload} />
          </a>
        </h1>

        <h4>
          Contains a list of my <span className="text-success">projects</span>,{' '}
          <span className="text-success">skills</span>,{' '}
          <span className="text-success">education / courses</span>,{' '}
          <span className="text-success">awards</span>, and{' '}
          <span className="text-success">more</span>.
        </h4>
      </div>
      <div
        className="row justify-content-center"
        style={{ marginBottom: '2em' }}
      >
        <img
          src={resume}
          alt="Resume"
          className="img-responsive col"
          style={{ maxWidth: 800 }}
        />
      </div>
    </div>
  );
}
