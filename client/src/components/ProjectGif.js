import React from 'react';

import { Modal } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ReactGa from 'react-ga';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const ProjectGif = (props) => {
  return (
    <div>
      <div className="row justify-contenc">
        <LazyLoadImage
          effect="blur"
          className="img-responsive col"
          src={require(`../assets/gifs/${props.title.replace(' ', '')}.gif`)}
          alt="No demo gif"
          onClick={() => {
            props.onClick();
            ReactGa.event({
              category: 'Project',
              action: `Clicked on ${props.title} modal.`,
            });
          }}
        />
      </div>

      <Modal
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.showModals[props.id]}
        onHide={props.onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className="row">
              <div className="col">{props.title}</div>
              {props.demoLink && (
                <a
                  href={props.demoLink}
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
                  className="card-link"
                  onClick={(e) => {
                    ReactGa.event({
                      category: 'Project',
                      action: `Clicked on ${props.title} devpost link (modal).`,
                    });
                  }}
                >
                  Devpost
                </a>
              )}
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row justify-content-center">
            <img
              className="img-responsive col"
              src={require(`../assets/gifs/${props.title.replace(
                ' ',
                ''
              )}.gif`)}
              alt="No demo gif"
            />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProjectGif;
