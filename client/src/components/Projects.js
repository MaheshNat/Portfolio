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
      hoverLanguage: null,
      removeQuery: null,
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
          <h5>
            Click on a gif / picture to view it in a modal, click on a
            language/skill to add it to the search, press enter in the search
            bar to add a search query to list of queries, or click on a query to
            remove it from the list of queries.
          </h5>
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
                    <OverlayTrigger
                      key={language}
                      placement="bottom"
                      overlay={(props) => (
                        <Tooltip id="button-tooltip" {...props}>
                          Click to add language/skill to search
                        </Tooltip>
                      )}
                    >
                      <span
                        className={`badge badge-${
                          language === this.state.hoverLanguage
                            ? 'success'
                            : 'info'
                        }`}
                        style={{ marginRight: '1em', cursor: 'pointer' }}
                        onClick={() => {
                          if (
                            !this.state.queries
                              .map((query) => query.toLowerCase())
                              .includes(language.toLowerCase())
                          ) {
                            let newQueries = this.state.queries;
                            newQueries.push(language);
                            this.setState({ queries: newQueries });
                          }
                        }}
                        onMouseEnter={() => {
                          this.setState({ hoverLanguage: language });
                        }}
                        onMouseLeave={() => {
                          this.setState({ hoverLanguage: null });
                        }}
                      >
                        {language}
                      </span>
                    </OverlayTrigger>
                  ))}
                </h6>
              </div>
            </div>
            <hr style={{ color: 'white', backgroundColor: 'white' }} />
            <div className="row justify-content-center">
              <div className="col-xs-12">
                {this.state.queries.map((query, index) => (
                  <span
                    className={`badge badge-${
                      query === this.state.removeQuery ? 'danger' : 'info'
                    }`}
                    style={{
                      marginRight: '1em',
                      marginBottom: '1em',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      let newQueries = this.state.queries;
                      newQueries.splice(index, 1);
                      this.setState({
                        queries: newQueries,
                      });
                    }}
                    key={query}
                    onMouseEnter={() => {
                      this.setState({ removeQuery: query });
                    }}
                    onMouseLeave={() => {
                      this.setState({ removeQuery: null });
                    }}
                  >
                    {query} &times;
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
                    videoLink={project.videoLink}
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
                    videoLink={project.videoLink}
                    gifLink={project.gifLink}
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
