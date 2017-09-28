import './_about.scss';
import React, { Component } from 'react';

class About extends React.Component {

  render() {
    return (
      <div>
        <body className='about-body'>
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
              <h2> A Little About Me </h2>

              <hr/>

              <h4> What I Am Currently Pursuing: </h4>
              <p> A long-term position writing code for an organization that encourages and supports learning new technologies and looks past the typical "What have you done?" mindset and asks "What will you do?". </p>

              <hr/>

              <h4> What Value I Bring:</h4>
              <p>  </p>

              <hr/>

              <h4></h4>
              <p></p>
            </div>


          </main>
        </body>
      </div>
    );
  }

}

export default About;
