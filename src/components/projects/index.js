import './_projects.scss';
import Slider from 'react-slick';
import React, { Component } from 'react';

import Project from './project';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectNames: ['one','two','three'],
    };
  }

  render() {
    const settings = {
      arrows: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 6000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true,
    };
    return (
      <div>
        <div className='projects-body'>
          <header className='projects-header'>
            <div>
              <h2>Projects</h2>
            </div>
          </header>

          <main className='projects-main'>
            <Slider {...settings}>
              <div>
                <Project
                  projectName={this.state.projectNames[0]}
                />
              </div>

              <div>
                <Project
                  projectName={this.state.projectNames[1]}
                />
              </div>

              <div>
                <Project
                  projectName={this.state.projectNames[2]}
                />
              </div>
            </Slider>
          </main>
        </div>
      </div>
    );
  }

}

export default Projects;
