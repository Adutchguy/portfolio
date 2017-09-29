import './_projects.scss';
import React, { Component } from 'react';

class Projects extends React.Component {

  render() {
    return (
      <div>
        <div className='projects-body'>
          <header className='projects-header'>
            <div>
              <h2>Projects</h2>
            </div>
          </header>

          <main className='projects-main'>
            <ul className='projects-main-ul'>
              <li className='projects-main-ul-li'>
                <iframe className='projects-main-ul-li-iframe' src='https://casehawk-frontend.herokuapp.com/'></iframe>
                <h4 className='projects-main-ul-li-h4'>DETAILS</h4>
              </li>
            </ul>
          </main>
        </div>
      </div>
    );
  }

}

export default Projects;
