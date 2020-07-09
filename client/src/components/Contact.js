import React, { Component } from 'react';
import axios from 'axios';
import { Alert, Spinner } from 'react-bootstrap';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      reason: 'Casual',
      message: '',
      sending: false,
      sent: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      sending: true,
      name: '',
      email: '',
      subject: '',
      reason: 'Casual',
      message: '',
      sent: false,
    });
    axios
      .post('/contact', {
        name: this.state.name,
        from: this.state.email,
        subject: this.state.subject,
        reason: this.state.reason,
        message: this.state.message,
      })
      .then((res) => {
        this.setState({ sent: true, sending: false });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="container container-fluid">
        <div
          className="jumbotron text-center"
          style={{ marginBottom: '2em', marginTop: '2em' }}
        >
          <h1>Send me an email.</h1>
          <h4>
            Reach out to me through email for{' '}
            <span className="text-success">casual talk</span>,{' '}
            <span className="text-success">business</span>,{' '}
            <span className="text-success">software</span>,{' '}
            <span className="text-success">questions / ideas</span>, or{' '}
            <span className="text-success">other </span>reasons.
          </h4>
        </div>
        <div className="row justify-content-center">
          <div className="col" style={{ maxWidth: '40em' }}>
            {this.state.sent && (
              <Alert
                className="shadow"
                style={{ marginBottom: '2em' }}
                variant="success"
                onClose={() => this.setState({ sent: false })}
                dismissible
              >
                Your email was sent.
              </Alert>
            )}
            <form
              onSubmit={this.handleSubmit}
              className="bg-secondary"
              style={{ borderRadius: '1em', padding: '2em' }}
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  onChange={this.handleChange}
                  value={this.state.name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  class="form-control"
                  id="subject"
                  onChange={this.handleChange}
                  value={this.state.subject}
                />
              </div>
              <div className="form-group">
                <label htmlFor="reason">Reason</label>
                <select
                  class="form-control"
                  id="reason"
                  onChange={this.handleChange}
                  value={this.state.reason}
                >
                  <option>Casual</option>
                  <option>Business</option>
                  <option>Software</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  rows="5"
                  placeholder="..."
                  class="form-control"
                  id="message"
                  onChange={this.handleChange}
                  value={this.state.message}
                />
              </div>
              <div className="row justify-content-center">
                <button
                  className="btn btn-success col-2"
                  type="submit"
                  style={{
                    cursor: !(
                      this.state.email &&
                      this.state.name &&
                      this.state.message &&
                      this.state.reason &&
                      this.state.subject
                    )
                      ? 'not-allowed'
                      : 'default',
                  }}
                  disabled={
                    !(
                      this.state.email &&
                      this.state.name &&
                      this.state.message &&
                      this.state.reason &&
                      this.state.subject
                    )
                  }
                >
                  Send{' '}
                  {this.state.sending && (
                    <Spinner animation="border" variant="light" />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
