import React from 'react';

import { Modal } from 'react-bootstrap';
import ReactGa from 'react-ga';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProjectGif = (props) => {
  return (
    <div>
      <div className="row">
        <OverlayTrigger
          placement="bottom"
          overlay={(props) => (
            <Tooltip id="button-tooltip" {...props}>
              Click to view project gif in modal
            </Tooltip>
          )}
        >
          <LazyLoadImage
            className="img-responsive col"
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
            }}
            placeholderSrc="https://dummyimage.com/1200x631/303030/ffffff.png&text=Loading..."
            src={props.gifLink}
            alt="No demo gif"
            effect="blur"
            onClick={() => {
              props.onClick();
              ReactGa.event({
                category: 'Project',
                action: `Clicked on ${props.title} modal.`,
              });
            }}
          />
        </OverlayTrigger>
      </div>

      <Modal
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.show}
        onHide={props.onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className="row">
              <div className="col">{props.title}</div>
              {props.demoLink && (
                <a
                  href={props.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                  onClick={(e) => {
                    ReactGa.event({
                      category: 'Project',
                      action: `Clicked on ${props.title} demo link (modal).`,
                    });
                  }}
                >
                  <FontAwesomeIcon icon={faLink} />
                </a>
              )}
              <a
                href={props.githubLink}
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  ReactGa.event({
                    category: 'Project',
                    action: `Clicked on ${props.title} github link (modal).`,
                  });
                }}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              {props.devpostLink && (
                <a
                  href={props.devpostLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                  onClick={(e) => {
                    ReactGa.event({
                      category: 'Project',
                      action: `Clicked on ${props.title} devpost link (modal).`,
                    });
                  }}
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} size="1x" />
                </a>
              )}
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row justify-content-center">
            <LazyLoadImage
              effect="blur"
              className="img-responsive col"
              src={props.gifLink}
              alt="No demo gif"
            />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProjectGif;
