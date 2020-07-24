import React from 'react';

import ReactGa from 'react-ga';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Project = (props) => {
  return (
    <div className="card">
      <h3 className="card-header">
        {props.title}
        <p className="text-muted" style={{ fontSize: 20 }}>
          {new Date(props.startDate).toDateString()} -{' '}
          {new Date(props.endDate).toDateString() === 'Invalid Date'
            ? 'Present'
            : new Date(props.endDate).toDateString()}
        </p>
      </h3>
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted">
          {props.languages.map((language) => (
            <span
              key={language}
              className="badge badge-info"
              style={{ marginRight: '1em' }}
            >
              {language}
            </span>
          ))}
        </h6>
        <ul>
          {props.description.split('. ').map((sentence) => (
            <li key={sentence}>{sentence}</li>
          ))}
        </ul>
        <h5 className="card-title">Links</h5>
        <hr />
        <div
          className="row justify-content-center text-center"
          style={{ marginBottom: '1em' }}
        >
          {props.demoLink && (
            <a
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link col"
              onClick={(e) => {
                ReactGa.event({
                  category: 'Project',
                  action: `Clicked on ${props.title} demo link.`,
                });
              }}
            >
              <FontAwesomeIcon icon={faLink} size="2x" />
            </a>
          )}
          <a
            href={props.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link col"
            onClick={(e) => {
              ReactGa.event({
                category: 'Project',
                action: `Clicked on ${props.title} github link.`,
              });
            }}
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          {props.devpostLink && (
            <a
              href={props.devpostLink}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link col"
              onClick={(e) => {
                ReactGa.event({
                  category: 'Project',
                  action: `Clicked on ${props.title} devpost link.`,
                });
              }}
            >
              <h6>Devpost</h6>
            </a>
          )}
        </div>
        <h5 className="cart-title">Creators</h5>
        <hr />
        <div className="row justify-content-center text-center">
          {props.creators.map((creator) => (
            <h6 key={creator} className="col-xs-6 col-sm-4">
              {creator}
            </h6>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
