import React, { Component } from 'react';

const Resume = (props) => (
  <embed
    name="resume"
    src={`${process.env.REACT_APP_BASE_URL}/resume-file`}
    type="application/pdf"
    style={{
      position: 'absolute',
      left: 0,
      top: 70,
      overflow: 'hidden',
    }}
    width="100%"
    height="92%"
  />
);

export default Resume;
