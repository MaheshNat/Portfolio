import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import { loadResume } from '../actions/resumeActions';
import { connect } from 'react-redux';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faExternalLinkAlt,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

import ReactGa from 'react-ga';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: null,
      page: 1,
      width: null,
      height: null,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
    this.jumbotron = React.createRef();
  }

  updateDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
    this.props.loadResume();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    return (
      <div className="container">
        <div
          className="jumbotron text-center"
          style={{ marginBottom: '2em', marginTop: '2em' }}
          ref={this.jumbotron}
        >
          <h1>
            Resume{' '}
            <a
              href={`${process.env.REACT_APP_BASE_URL}/resume`}
              onClick={() => {
                ReactGa.event({
                  category: 'Resume',
                  action: 'Downloaded resume.',
                });
              }}
            >
              <FontAwesomeIcon icon={faDownload} />
            </a>{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`${process.env.REACT_APP_BASE_URL}/resume-file`}
              onClick={() => {
                ReactGa.event({
                  category: 'Resume',
                  action: 'Viewed resume blob.',
                });
              }}
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </h1>

          <h4>
            Contains a list of my <span className="text-success">projects</span>
            , <span className="text-success">skills</span>,{' '}
            <span className="text-success">education / courses</span>,{' '}
            <span className="text-success">awards</span>, and{' '}
            <span className="text-success">more</span>.
          </h4>
        </div>
        {this.props.resume ? (
          <>
            <div
              className="text-center row justify-content-center"
              style={{ marginBottom: '2em', marginTop: '2em' }}
            >
              <button
                className="col-xs-2 btn btn-success"
                disabled={this.state.page === 1}
                style={{
                  cursor: this.state.page === 1 ? 'not-allowed' : 'default',
                }}
                onClick={() => {
                  this.setState((state, props) => ({ page: state.page - 1 }));
                }}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <h5
                className="col-xs-2"
                style={{ paddingTop: 8, marginLeft: '1em', marginRight: '1em' }}
              >
                Page {this.state.page} of {this.state.pages}
              </h5>
              <button
                className="col-xs-2 btn btn-success"
                disabled={this.state.page === this.state.pages}
                style={{
                  cursor:
                    this.state.page === this.state.pages
                      ? 'not-allowed'
                      : 'default',
                }}
                onClick={() => {
                  this.setState((state, props) => ({
                    page: this.state.page + 1,
                  }));
                }}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            <div
              style={{
                marginBottom: '2em',
                overflow: 'auto',
              }}
              className={
                this.state.width >= 768 ? 'row justify-content-center' : ''
              }
            >
              <Document
                file={this.props.resume}
                onLoadSuccess={({ _pdfInfo }) =>
                  this.setState({ pages: _pdfInfo.numPages })
                }
              >
                <Page
                  pageNumber={this.state.page}
                  width={
                    this.jumbotron.current
                      ? Math.max(this.jumbotron.current.clientWidth, 575)
                      : ''
                  }
                />
              </Document>
            </div>
          </>
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
    resume: state.resume,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadResume: () => {
      dispatch(loadResume());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Resume);
