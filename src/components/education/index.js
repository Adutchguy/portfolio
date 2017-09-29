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

                <hr/>

                <li className='education-main-div-ul-li'>
                  <a target='_blank' href='https://www.codefellows.org/'><h4> Code Fellows </h4></a>
                  <p><strong>From: </strong>March, 2017</p>
                  <p><strong>To: </strong>August, 2017</p>
                  <p><strong>Location: </strong>Seattle, WA</p>
                  <p><strong>Skills Studied: </strong>Full Stack JavaScript Development</p>
                  <p><strong>Cumulative GPA: </strong> 4.0</p>
                </li>

                <hr/>

                <li className='education-main-div-ul-li'>
                  <a target='_blank' href='https://www.codefellows.org/'><h4> Edmonds Community College, ATA </h4></a>
                  <p><strong>From: </strong>July, 2013</p>
                  <p><strong>To: </strong>June, 2015</p>
                  <p><strong>Location: </strong>Edmonds, WA</p>
                  <p><strong>Skills Studied: </strong>Computer Information Systems</p>
                  <p><strong>Cumulative GPA: </strong> 4.0</p>
                </li>

                <hr/>

                <li className='education-main-div-ul-li'>
                  <a target='_blank' href='https://teamtreehouse.com/michaelmiller20'><h4> Treehouse </h4></a>
                  <p><strong>Location: </strong>Online</p>
                  <p><strong>Skills Studied:</strong><a href='#' onClick={this.props.handleModalClickEvent}>Click to see topics</a></p>
                </li>

                <hr/>

                <li className='education-main-div-ul-li'>
                  <a target='_blank' href='https://www.udemy.com/'><h4> Udemy, ATA </h4></a>
                  <p><strong>Location: </strong>Online</p>
                  <p><strong>Skills Studied: </strong>Algorithms and Data Structures</p>
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
