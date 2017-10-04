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
          <a target='_blank' href={this.props.githubRepo.html_url}><h2 className='project-header-h2'>{this.props.githubRepo.name}</h2></a>
        </header>
        <div className='project-details'>
          <li className='project-details-li'>



            <div  className='description'>
              <h5><strong> Project Description: </strong></h5>
              <p>
                { (() => {
                  switch (this.props.githubRepo.full_name) {
                  case 'Adutchguy/portfolio':
                    return 'This project is continuously in-work and ever changing. Built in ReactJS and styled using scss, it utilizes a clean design and coordinated color palette. I was intentional in keeping it simple so that my information could be easily gathered. I learned a great deal about react and JavaScript in building out this application. I plan to build out even more functionality as time permits.';
                  case 'Adutchguy/ibcf-music-frontend':
                    return 'IBCF Music is a calendar application built specifically for use by my church\'s music department. Users can create, update, view, and delete availability on the calendar. The front end is developed in ReactJS and JavaScript and the back end is developed in Node.js and JavaScript.';
                  case 'Adutchguy/ibcf-music-backend':
                    return 'Currently in-work, This backend API is being built for use with the IBCF Music frontend. Though I am planning to build it for more modular use.';
                  case 'vagabond0079/casehawk-frontend':
                    return 'This team project was a prototype calendar application built specifically for use at a legal office. Users can create, update, view, and delete events on the calendar. The front end is developed in ReactJS and SCSS.';
                  case 'vagabond0079/casehawk-backend':
                    return 'This API served as the backend for the casehawk frontend deployment. Users are able to perform full CRUD for events.';
                  default:
                    return null;
                  }
                })()
                }
              </p>
            </div>




            <div className='language'>
              <h5><strong> Language: </strong></h5>
              <p> {this.props.githubRepo.language} </p>
            </div>




            <div className='technologies'>
              <h5><strong> Technologies: </strong></h5>
              <p>
                { (() => {
                  switch (this.props.githubRepo.full_name) {
                  case 'Adutchguy/portfolio':
                    return 'reactjs, node, html5, github API, treehouse API, slick-slider library, sass/scss, superagent, webpack, babel';
                  case 'Adutchguy/ibcf-music-frontend':
                    return 'reactjs, node, html5, scss, mongoose, superagent, webpack, babel, jest, lodash, redux';
                  case 'Adutchguy/ibcf-music-backend':
                    return 'mongodb, node, mongoose, superagent, express, aws s3, json, morgan, mocha';
                  case 'vagabond0079/casehawk-frontend':
                    return 'babel, jest, lodash, moment, node, reactjs, redux, scss, webpack, superagent';
                  case 'vagabond0079/casehawk-backend':
                    return 'AWS S3, crypto, body-parser, express, json, moment, morgan, superagent, mocha, expect';
                  default:
                    return null;
                  }
                })()
                }
              </p>
            </div>




            {
              this.props.reposToRequest.map((item,index) => {
                if(item.name === this.props.githubRepo.full_name
                && item.deployed_url) {
                  return  <div  className='view-deployed' key={index}>
                    <h5><strong> View Deployed Project: </strong></h5>
                    <a target href={item.deployed_url}><p> Click Here </p></a>
                  </div>;
                }
              })
            }



          </li>
        </div>

      </div>
    );
  }

}

export default Project;
