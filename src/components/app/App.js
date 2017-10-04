import './_App.scss';
import React from 'react';
import superagent from 'superagent';

import Header from '../header';
import About from '../about';
import Footer from '../footer';
import Projects from '../projects';
import Education from '../education';
import TreehouseModal from '../education/treehouse-modal';
import EdccModal from '../education/edcc-modal';
import CodeFellowsModal from '../education/code-fellows-modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      treehouseModalIsOpen: false,
      edccModalIsOpen: false,
      codeFellowsModalIsOpen: false,
      badges: [],
      githubRepos: [],
    };
    this.treehouseRequest = this.treehouseRequest.bind(this);
    this.handleTreehouseModalClickEvent = this.handleTreehouseModalClickEvent.bind(this);
    this.handleEdccModalClickEvent = this.handleEdccModalClickEvent.bind(this);
    this.handleCodeFellowsModalClickEvent = this.handleCodeFellowsModalClickEvent.bind(this);
  }

  treehouseRequest() {
    superagent('get', `${process.env.REACT_APP_TREEHOUSE_URL}`)
      .then(res => {
        this.setState({badges: res.body.badges});
      })
      .catch(err => console.error(err));
  }

  componentWillMount(){
    this.treehouseRequest();
  }

  handleTreehouseModalClickEvent(e) {
    e.preventDefault();
    this.setState({treehouseModalIsOpen: !this.state.treehouseModalIsOpen});
  }
  handleEdccModalClickEvent(e) {
    e.preventDefault();
    this.setState({edccModalIsOpen: !this.state.edccModalIsOpen});
  }
  handleCodeFellowsModalClickEvent(e) {
    e.preventDefault();
    this.setState({codeFellowsModalIsOpen: !this.state.codeFellowsModalIsOpen});
  }


  render() {
    return (
      <div className='app'>
        <h1 className='SEO'> ReactJS,JavaScript,NodeJS,Node,react,html,css,sass,scss,express,html5,css3,loops,arrays,michael,miller,d,dean,software,web,developer,front,end,front-end,back-end,Michael Miller,Michael D Miller </h1>

        <Header />
        <main className='app-main'>
          <div className='app-left'>
            <About />
          </div>

          <div className='app-middle'>
            <Projects
              githubRepos={this.state.githubRepos}
            />
          </div>

          <div className='app-right'>
            <Education
              handleCodeFellowsModalClickEvent = {this.handleCodeFellowsModalClickEvent}
              handleEdccModalClickEvent = {this.handleEdccModalClickEvent}
              handleTreehouseModalClickEvent = {this.handleTreehouseModalClickEvent}
            />
          </div>
        </main>

        <footer className='app-footer'>
          <Footer />
        </footer>

        {this.state.treehouseModalIsOpen
          ?
          <TreehouseModal
            badges={this.state.badges}
            handleTreehouseModalClickEvent = {this.handleTreehouseModalClickEvent}
          />
          :
          null
        }
        {this.state.edccModalIsOpen
          ?
          <EdccModal
            handleEdccModalClickEvent = {this.handleEdccModalClickEvent}
          />
          :
          null
        }
        {this.state.codeFellowsModalIsOpen
          ?
          <CodeFellowsModal
            handleCodeFellowsModalClickEvent = {this.handleCodeFellowsModalClickEvent}
          />
          :
          null
        }
      </div>
    );
  }
}

export default App;
