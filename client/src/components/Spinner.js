import React, { Component } from 'react';

export default class Spinner extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col text-center">
          <div
            className="spinner-border"
            style={{ width: '8em', height: '8em', marginBottom: '2em' }}
            role="status"
          ></div>
        </div>
      </div>
    );
  }
}
