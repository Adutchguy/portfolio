import './_projects.scss';
import React, { Component } from 'react';

class Projects extends React.Component {

  render() {
    return (
      <div>
        <div className='projects-body'>
          <header className='projects-header'>
            <div>
              header of projects component
            </div>
          </header>

          <main className='projects-main'>
            <div>
              main of projects component
            </div>
          </main>
        </div>
      </div>
    );
  }

}

export default Projects;
