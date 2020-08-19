import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

import ReactGa from 'react-ga';

export default class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: null,
      page: 1,
      width: null,
      height: null,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
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
        >
          <h1>
            Resume{' '}
            <a
              href={'http://mnat.herokuapp.com/api/resume'}
              onClick={() => {
                ReactGa.event({
                  category: 'Resume',
                  action: 'Downloaded resume.',
                });
              }}
            >
              <FontAwesomeIcon icon={faDownload} />
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
              this.setState((state, props) => ({ page: this.state.page + 1 }));
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
          className={this.state.width > 768 ? 'row justify-content-center' : ''}
        >
          <Document
            file={require('../assets/mahesh-natamai-resume.pdf')}
            onLoadSuccess={({ _pdfInfo }) =>
              this.setState({ pages: _pdfInfo.numPages })
            }
          >
            <Page pageNumber={this.state.page} />
          </Document>
        </div>
      </div>
    );
  }
}
