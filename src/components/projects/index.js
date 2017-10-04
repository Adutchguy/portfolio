import './_projects.scss';
import Slider from 'react-slick';
import superagent from 'superagent';
import React, { Component } from 'react';

import Project from './project';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reposToRequest: ['portfolio', 'ibcf-music-frontend', 'ibcf-music-backend', 'casehawk-frontend', 'casehawk-backend'],
      githubRepos: [],
      settings: {
        arrows: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 6000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        draggable: false,
        swipe: false,
      },
    };
    this.githubRepoRequest = this.githubRepoRequest.bind(this);
  }

  githubRepoRequest(repoName) {
    superagent('get', `${process.env.REACT_APP_GITHUB_URL}${repoName}`)
      .set({'Authorization': `token ${process.env.REACT_APP_GITHUB_TOKEN}`})
      .then((res) => {
        this.setState({
          githubRepos: [...this.state.githubRepos, res.body],
        });
      })
      .catch(err => console.error(err));
  }

  componentWillMount() {
    this.state.reposToRequest.forEach(repoName => this.githubRepoRequest(repoName));
  }

  render() {
    console.log(this.state.githubRepos);
    return (
      <div className='projects-body'>
        <div className='projects-body'>
          <header className='projects-header'>
            <div>
              <h2>Projects</h2>
              <p> (all information pulled straight from <a href={'https://developer.github.com/v3/'} target='_blank'>github API</a>) </p>
            </div>
          </header>

          <main className='projects-main'>
            <Slider {...this.state.settings}>
              {this.state.githubRepos.map((repo,index) => {
                return(
                  <div key={index}>
                    <Project
                      githubRepo={repo}
                    />
                  </div>
                );
              })}
            </Slider>
          </main>

        </div>
      </div>
    );
  }

}

export default Projects;
