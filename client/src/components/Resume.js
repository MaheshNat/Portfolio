import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

import ReactGa from 'react-ga';

export default function Resume() {
  const pages = 2;
  const [page, setPage] = useState(1);
  return (
    <div className="container">
      <div
        className="jumbotron text-center"
        style={{ marginBottom: '2em', marginTop: '2em' }}
      >
        <h1>
          Resume{' '}
          <a
            href={'http://mnat.herokuapp.com/api/resume'}
            onClick={() => {
              ReactGa.event({
                category: 'Resume',
                action: 'Downloaded resume.',
              });
            }}
          >
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
        className="text-center row justify-content-center"
        style={{ marginBottom: '2em', marginTop: '2em' }}
      >
        <button
          className="col-xs-2 btn btn-success"
          disabled={page === 1}
          style={{ cursor: page === 1 ? 'not-allowed' : 'default' }}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h5
          className="col-xs-2"
          style={{ paddingTop: 8, marginLeft: '1em', marginRight: '1em' }}
        >
          Page {page} of {pages}
        </h5>
        <button
          className="col-xs-2 btn btn-success"
          disabled={page === pages}
          style={{ cursor: page === pages ? 'not-allowed' : 'default' }}
          onClick={() => {
            setPage(page + 1);
          }}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <div
        className="row justify-content-center"
        style={{ marginBottom: '2em' }}
      >
        <img
          src={require(`../assets/images/Resume/Resume-${page}.png`)}
          alt="Resume"
          className="img-responsive col"
          style={{ maxWidth: 800 }}
        />
      </div>
    </div>
  );
}
