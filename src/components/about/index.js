import './_about.scss';
import React, { Component } from 'react';

class About extends React.Component {

  render() {
    return (
      <div className='about-body'>
        <div className='about-body'>
          <div className='about-body-div'>
            <h2> A Little About Myself </h2>
          </div>
          <header className='about-header'>
            <div className='about-header-div'>
              <img
                className='about-header-div-img'
                src={require('../../assets/img/me.jpg')} />
              <div className='about-header-img-inner-div'>
                <h3 className='about-name'> Michael Miller </h3>
                <p className='about-role'> Front-End Software Developer </p>
              </div>
            </div>
          </header>

          <main>
            <div>
              <h4> What I Am Currently Pursuing: </h4>
              <p> A long-term position writing code for an organization that encourages and supports learning new technologies and looks past the typical "What have you done?" mindset and asks "What will you do?". </p>

              <hr/>

              <h4> What Value I Bring:</h4>
              <p> I believe the greatest value I bring to any organization is my love of learning. I know what I don't know which allows me to quickly identify what I need to learn in order to excel at any given task. </p>
              <p></p>
            </div>
          </main>
        </div>
      </div>
    );
  }

}

export default About;
