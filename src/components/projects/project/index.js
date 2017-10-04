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
          <a target='_blank' href={this.props.githubRepo.html_url}><h2 className='project-header-h3'>{this.props.githubRepo.name}</h2></a>
        </header>
        <div className='project-details'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

      </div>
    );
  }

}

export default Project;
