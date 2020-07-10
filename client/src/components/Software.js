import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadRepositories } from '../actions/githubActions';
import { OverlayTrigger, Tooltip, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ReactGa from 'react-ga';

class Software extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortMode: 'asc',
      sortField: null,
      repositories: this.props.repositories ?? [],
    };
  }
  componentWillReceiveProps(props) {
    this.setState({ repositories: props.repositories });
  }

  componentDidMount() {
    if (!this.props.repositories) this.props.loadRepositories();
    ReactGa.pageview(window.location.pathname + window.location.search);
  }

  handleSort = (key) => {
    let _repositories = this.state.repositories.sort((a, b) => {
      return this.state.sortMode === 'asc'
        ? a[key] < b[key]
          ? -1
          : 1
        : a[key] > b[key]
        ? -1
        : 1;
    });
    let newSortMode = this.state.sortMode === 'asc' ? 'desc' : 'asc';
    this.setState({
      sortMode: newSortMode,
      sortField: key,
      repositories: _repositories,
    });
  };

  render() {
    return (
      <div className="container container-fluid">
        <div
          className="jumbotron text-center"
          style={{ marginBottom: '2em', marginTop: '2em' }}
        >
          <h1>Software Repository</h1>
          <h4>Collection of my GitHub repositories queried using GitHub API</h4>
          <h4>Click on a column header to sort the column.</h4>
          <h4>
            Hover over a shortened description to view the full description.
          </h4>
          <p className="lead">
            Note: This table does not contain{' '}
            <span className="text-success">private repositories</span> nor
            repositories from{' '}
            <span className="text-success">organizations</span>.
          </p>
        </div>

        {this.props.repositories ? (
          <Table responsive hover style={{ marginBottom: '2em' }}>
            <thead>
              <tr>
                <th
                  scope="col"
                  onClick={() => {
                    this.handleSort('title');
                  }}
                >
                  Title
                  {this.state.sortField === 'title'
                    ? this.state.sortMode === 'desc'
                      ? ' \u25B2'
                      : ' \u25BC'
                    : ''}
                </th>
                <th
                  scope="col"
                  onClick={() => {
                    this.handleSort('description');
                  }}
                >
                  Description
                  {this.state.sortField === 'description'
                    ? this.state.sortMode === 'desc'
                      ? ' \u25B2'
                      : ' \u25BC'
                    : ''}
                </th>
                <th
                  scope="col"
                  onClick={() => {
                    this.handleSort('language');
                  }}
                >
                  Language
                  {this.state.sortField === 'language'
                    ? this.state.sortMode === 'desc'
                      ? ' \u25B2'
                      : ' \u25BC'
                    : ''}
                </th>
                <th
                  scope="col"
                  onClick={() => {
                    this.handleSort('createdAt');
                  }}
                >
                  Created At
                  {this.state.sortField === 'createdAt'
                    ? this.state.sortMode === 'desc'
                      ? ' \u25B2'
                      : ' \u25BC'
                    : ''}
                </th>
                <th
                  scope="col"
                  onClick={() => {
                    this.handleSort('lastUpdatedAt');
                  }}
                >
                  Last Updated At
                  {this.state.sortField === 'lastUpdatedAt'
                    ? this.state.sortMode === 'desc'
                      ? ' \u25B2'
                      : ' \u25BC'
                    : ''}
                </th>
                <th
                  scope="col"
                  onClick={() => {
                    this.handleSort('link');
                  }}
                >
                  Link
                  {this.state.sortField === 'link'
                    ? this.state.sortMode === 'desc'
                      ? ' \u25B2'
                      : ' \u25BC'
                    : ''}
                </th>
                <th
                  scope="col"
                  onClick={() => {
                    this.handleSort('size');
                  }}
                >
                  Size (MB)
                  {this.state.sortField === 'size'
                    ? this.state.sortMode === 'desc'
                      ? ' \u25B2'
                      : ' \u25BC'
                    : ''}
                </th>
                <th
                  scope="col"
                  onClick={() => {
                    this.handleSort('stars');
                  }}
                >
                  Stars
                  {this.state.sortField === 'stars'
                    ? this.state.sortMode === 'desc'
                      ? ' \u25B2'
                      : ' \u25BC'
                    : ''}
                </th>
              </tr>
            </thead>
            <tbody>
              {this.props.repositories.map((repo) => (
                <tr className="table-secondary" key={repo._id}>
                  <td>{repo.title}</td>
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={(props) => (
                      <Tooltip id="button-tooltip" {...props}>
                        {repo.description}
                      </Tooltip>
                    )}
                  >
                    <td>
                      {repo.description.length > 39
                        ? repo.description.substring(0, 39) + '...'
                        : repo.description}
                    </td>
                  </OverlayTrigger>
                  <td>{repo.language}</td>
                  <td>{new Date(repo.createdAt).toLocaleDateString()}</td>
                  <td>{new Date(repo.lastUpdatedAt).toLocaleDateString()}</td>
                  <td>
                    <a
                      href={repo.link}
                      onClick={(e) => {
                        ReactGa.event({
                          category: 'Software',
                          action: `Clicked on ${repo.title} github link.`,
                        });
                      }}
                    >
                      <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                  </td>
                  <td>{repo.size}</td>
                  <td>{repo.stars}</td>
                </tr>
              ))}
            </tbody>
          </Table>
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
    repositories: state.repositories,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadRepositories: () => {
      dispatch(loadRepositories());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Software);
