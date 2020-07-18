import React from 'react';

import ReactGa from 'react-ga';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const Episode = (props) => (
  <div className="card" style={{ marginBottom: '2em' }}>
    <h3 className="card-header">
      {props.title}
      <p className="text-muted" style={{ fontSize: 20 }}>
        {new Date(props.publishedAt).toDateString()}{' '}
        <a
          href={props.url}
          className="card-link"
          onClick={(e) => {
            ReactGa.event({
              category: 'Project',
              action: `Clicked on ${props.title} demo link.`,
            });
          }}
        >
          <FontAwesomeIcon icon={faYoutube} size="1x" />
        </a>
      </p>
    </h3>
    <div className="card-body">
      <ul>{props.description}</ul>
    </div>
  </div>
);

export default Episode;
