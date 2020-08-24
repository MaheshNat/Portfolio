import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadProjects } from '../actions/projectsActions';
import Project from './Project';
import ProjectGif from './ProjectGif';

import ReactGa from 'react-ga';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModals: {},
      query: '',
    };
  }
  componentDidMount = () => {
    if (!this.props.projects) this.props.loadProjects();
    ReactGa.pageview(window.location.pathname + window.location.search);
  };

  componentWillReceiveProps = (props) => {
    if (this.state.showModals === {}) {
      let _showModals = {};
      props.projects.forEach((project) => {
        _showModals[project._id] = false;
      });
      console.log(_showModals);
      this.setState({ showModals: _showModals });
    }
    this.setState({ projects: props.projects });
  };

  onClick = (id) => {
    let newShowModals = this.state.showModals;
    newShowModals[id] = true;
    this.setState({ showModals: newShowModals });
  };

  onHide = (id) => {
    let newShowModals = this.state.showModals;
    newShowModals[id] = false;
    this.setState({ showModals: newShowModals });
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
          <div
            className="row justify-content-center text-center"
            style={{ margin: '1em 0em' }}
          >
            <h3>All Languages/Skills</h3>
            <div className="col-xs-12" style={{ marginBottom: '1em' }}>
              <h6 className="card-subtitle mb-2 text-muted">
                {Array.from(
                  new Set(
                    [].concat(
                      ...this.props.projects.map((project) => project.languages)
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
            <div className="col-xs-12">
              <div className="div form-group">
                <label htmlFor="search">
                  Search Projects By Languages/Skills
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    this.setState({ query: e.target.value });
                  }}
                />
              </div>
            </div>
          </div>
        )}
        {this.props.projects ? (
          this.props.projects
            .filter((project) =>
              project.languages.some((language) =>
                language.toLowerCase().includes(this.state.query.toLowerCase())
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
                      this.onClick(project._id);
                    }}
                    onHide={() => {
                      this.onHide(project._id);
                    }}
                    showModals={this.state.showModals}
                  />
                </div>
              </div>
            ))
        ) : (
          <div className="row justify-content-center">
            <div className="col text-center">
              <div
                className="spinner-border"
                style={{ width: '8em', height: '8em', marginBottom: '2em' }}
                role="status"
              ></div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadProjects: () => {
      dispatch(loadProjects());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Projects);
