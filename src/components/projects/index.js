import './_projects.scss';
import Slider from 'react-slick';
import superagent from 'superagent';
import React, { Component } from 'react';

import Project from './project';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reposToRequest: [
        {
          name: 'Adutchguy/portfolio',
          deployed_url: 'https://michael-miller-portfolio.herokuapp.com/',
        },
        {
          name: 'Adutchguy/ibcf-music-frontend',
          deployed_url: 'https://ibcf.herokuapp.com/',
        },
        {
          name: 'Adutchguy/ibcf-music-backend',
        },
        {
          name: 'vagabond0079/casehawk-frontend',
          deployed_url: 'https://casehawk-frontend.herokuapp.com/',
        },
        {
          name: 'vagabond0079/casehawk-backend',
        },
      ],
      githubRepos: [],
      standardSettings: {
        slidesToShow: 2,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 500,
        pauseOnHover: true,
        draggable: false,
        swipe: false,
      },
      mobileSettings: {
        slidesToShow: 1,
        arrows: true,
        infinite: true,
        autoplay: false,
        speed: 500,
        pauseOnHover: true,
        draggable: true,
        swipe: true,
      },
    };
    this.githubAllRepoRequest = this.githubAllRepoRequest.bind(this);
  }

  githubAllRepoRequest() {
    superagent('get', `${process.env.REACT_APP_GITHUB_URL}`)
      .set({'Authorization': `token ${process.env.REACT_APP_GITHUB_TOKEN}`})
      .then((res) => {
        res.body.filter(repo =>
          this.state.reposToRequest.map(item => {return item.name;})
            .includes(repo.full_name)
            ? this.setState({githubRepos: [...this.state.githubRepos, repo]})
            : null
        );
      })
      .catch(err => console.error(err));
  }

  componentWillMount() {
    this.githubAllRepoRequest();
  }

  render() {
    return (
      <div className='projects-body'>
        <div className='projects-body'>
          <header className='projects-header'>
            <div>
              <h2>Projects</h2>
            </div>
          </header>

          <main className='projects-main'>
            <Slider {...this.props.windowWidth <= 1024 ? this.state.mobileSettings : this.state.standardSettings}>
              {this.state.githubRepos.map((repo,index) => {
                return(
                  <div key={index}>
                    <Project
                      githubRepo={repo}
                      reposToRequest={this.state.reposToRequest}
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
