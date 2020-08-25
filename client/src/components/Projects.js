import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadProjects } from '../actions/projectsActions';
import Project from './Project';
import ProjectGif from './ProjectGif';
import Spinner from './Spinner';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import ReactGa from 'react-ga';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      queries: [],
    };
  }

  componentDidMount = () => {
    if (!this.props.projects) this.props.loadProjects();
    ReactGa.pageview(window.location.pathname + window.location.search);
  };

  render() {
    return (
      <div className="container container-fluid">
        <div className="jumbotron text-center" style={{ marginTop: '2em' }}>
          <h1>Projects</h1>
          <h4>
            Collection of my{' '}
            <span className="text-success">web development </span>(fullstack),{' '}
            <span className="text-success">machine learning</span>, and other
            projects.
          </h4>
          <h4>Click on a gif / picture to view it in a modal.</h4>
          <p className="lead">
            Note: This page does not contain all my projects
          </p>
        </div>
        {this.props.projects && (
          <>
            <div
              className="row justify-content-center text-center"
              style={{ margin: '1em 0em' }}
            >
              <h3>All Languages/Skills</h3>
              <div className="col-xs-12">
                <h6 className="card-subtitle mb-2 text-muted">
                  {Array.from(
                    new Set(
                      [].concat(
                        ...this.props.projects.map(
                          (project) => project.languages
                        )
                      )
                    )
                  ).map((language) => (
                    <span
                      key={language}
                      className="badge badge-info"
                      style={{ marginRight: '1em' }}
                    >
                      {language}
                    </span>
                  ))}
                </h6>
              </div>
            </div>
            <hr style={{ color: 'white', backgroundColor: 'white' }} />
            <div className="row justify-content-center">
              <div className="col-xs-12">
                {this.state.queries.map((query, index) => (
                  <span
                    className="badge badge-info"
                    style={{ marginRight: '1em', marginBottom: '1em' }}
                    key={query}
                  >
                    {query}{' '}
                    <span
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        let newQueries = this.state.queries;
                        newQueries.splice(index, 1);
                        this.setState({
                          queries: newQueries,
                        });
                      }}
                    >
                      &times;
                    </span>
                  </span>
                ))}
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xs-12">
                <div className="div form-group">
                  <label htmlFor="search">
                    Search Projects By Languages/Skills
                  </label>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={(props) => (
                      <Tooltip id="button-tooltip" {...props}>
                        Press enter to add language/skill to search
                      </Tooltip>
                    )}
                  >
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.query}
                      onChange={(e) => {
                        this.setState({ query: e.target.value });
                      }}
                      onKeyPress={(e) => {
                        if (
                          e.key === 'Enter' &&
                          this.state.query !== '' &&
                          !this.state.queries
                            .map((query) => query.toLowerCase())
                            .includes(this.state.query.toLowerCase())
                        ) {
                          let newQueries = this.state.queries;
                          newQueries.push(this.state.query);
                          this.setState({
                            queries: newQueries,
                            query: '',
                          });
                        }
                      }}
                    />
                  </OverlayTrigger>
                </div>
              </div>
            </div>
          </>
        )}
        {this.props.projects ? (
          this.props.projects
            .filter(
              (project) =>
                project.languages.some((language) =>
                  language
                    .toLowerCase()
                    .includes(this.state.query.toLowerCase())
                ) &&
                this.state.queries.every((language) =>
                  project.languages
                    .map((language) => language.toLowerCase())
                    .includes(language.toLowerCase())
                )
            )
            .map((project) => (
              <div
                className="row justify-content-center"
                style={{
                  marginBottom: '2em',
                }}
                key={project._id}
              >
                <div className="col-xs-12 col-lg-6">
                  <Project
                    creators={project.creators}
                    demoLink={project.demoLink}
                    description={project.description}
                    devpostLink={project.devpostLink}
                    githubLink={project.githubLink}
                    languages={project.languages}
                    title={project.title}
                    startDate={project.startDate}
                    endDate={project.endDate}
                  />
                </div>
                <div className="col-xs-12 col-lg-6">
                  <ProjectGif
                    title={project.title}
                    id={project._id}
                    demoLink={project.demoLink}
                    githubLink={project.githubLink}
                    devpostLink={project.devpostLink}
                    onClick={() => {
                      this.props.showModal(project._id);
                    }}
                    onHide={() => {
                      this.props.hideModal(project._id);
                    }}
                    show={this.props.showModals[project._id]}
                  />
                </div>
              </div>
            ))
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    showModals: state.showModals,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadProjects: () => {
      dispatch(loadProjects());
    },
    showModal: (id) => {
      dispatch({ type: 'SHOW_MODAL', id: id });
    },
    hideModal: (id) => {
      dispatch({ type: 'HIDE_MODAL', id: id });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Projects);
