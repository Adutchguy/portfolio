import './_about.scss';
import React, { Component } from 'react';

import Contact from '../contact';

class About extends React.Component {

  render() {
    return (
      <div className='about-body'>
        <div className='about-body'>
          <div className='about-body-div'>
            <h2 className='about-body-div-h2'> A Little About Myself </h2>
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

              <hr/>

              <div>
                <h4> Volunteer Work:</h4>
                <h5> International Bible Christian Fellowship </h5>
                <h6> Music Ministry Coordinator </h6>
                <p> Since 2005 I have served as the lead "tech guy" at my church in Lynnwood, WA. My primary service entails: planning, organizing, and often times participating in the weekly worship activities. </p>
              </div>

              <hr/>

              <h4> Hobbies:</h4>
              <p>Soccer, Music, PC Gaming, Home Improvement </p>

              <hr/>
            </div>
            <div className='standard-app-contact'>
              <Contact
                class='standard-contact'
              />
            </div>
          </main>
        </div>
      </div>
    );
  }

}

export default About;
