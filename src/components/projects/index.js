import './_projects.scss';
import React, { Component } from 'react';
import Slider from 'react-slick';

class Projects extends React.Component {

  render() {
    const settings = {
      arrows: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 6000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
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
              <div>testing1</div>
              <div>testing2</div>
              <div>testing3</div>
            </Slider>
          </main>
        </div>
      </div>
    );
  }

}

export default Projects;
