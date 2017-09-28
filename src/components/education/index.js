import './_education.scss';
import React, { Component } from 'react';

class Education extends React.Component {

  render() {
    return (
      <div>
        <div className='education-body'>
          <header className='education-header'>
            <div>
              <h2> Education </h2>
            </div>
          </header>

          <main className='education-main'>
            <div className='education-main-div'>
              <ul className='education-main-div-ul'>
                <li className='education-main-div-ul-li'>
                  <h4> CODE FELLOWS </h4>
                  <p>Attended - <b>From: </b></p>
                </li>
              </ul>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Education;
