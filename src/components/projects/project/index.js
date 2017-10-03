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
      <div className='project'>
        <header className='project-header'>
          <img  className='project-header-img' src={'http://via.placeholder.com/200X200'} />
        </header>
        <div className='project-details'>
          <h3 className='project-details-h3'>{this.props.projectName}</h3>

        </div>

      </div>
    );
  }

}

export default Project;
