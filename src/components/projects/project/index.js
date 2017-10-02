import './_project.scss';
import React, { Component } from 'react';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h3>{this.props.projectName}</h3>
        <img src={'http://via.placeholder.com/350x150'} />
      </div>
    );
  }

}

export default Project;
