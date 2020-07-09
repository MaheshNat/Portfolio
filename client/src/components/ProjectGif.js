import React from 'react';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const ProjectGif = (props) => {
  return (
    <div>
      <div className="row justify-contenc">
        <img
          className="img-responsive col"
          src={require(`../assets/gifs/${props.title.replace(' ', '')}.gif`)}
          alt="No demo gif"
          onClick={props.onClick}
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
                <a href={props.demoLink} className="card-link">
                  <FontAwesomeIcon icon={faLink} />
                </a>
              )}
              <a href={props.githubLink} className="card-link">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              {props.devpostLink && (
                <a href={props.devpostLink} className="card-link">
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
