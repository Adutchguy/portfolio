import './_App.scss';
import React from 'react';
import superagent from 'superagent';
import {HashRouter as Router, Route} from 'react-router-dom';

import Nav from '../nav';
import About from '../about';
import Header from '../header';
import Contact from '../contact';
import NavIcon from '../nav-icon';
import Projects from '../projects';
import Education from '../education';
import EdccModal from '../education/edcc-modal';
import TreehouseModal from '../education/treehouse-modal';
import CodeFellowsModal from '../education/code-fellows-modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth,
      navIsOpen: false,
      treehouseModalIsOpen: false,
      edccModalIsOpen: false,
      codeFellowsModalIsOpen: false,
      badges: [],
      githubRepos: [],
    };
    this.handleEscapeKey = this.handleEscapeKey.bind(this);
    this.treehouseRequest = this.treehouseRequest.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.handleNavIconClickEvent = this.handleNavIconClickEvent.bind(this);
    this.handleEdccModalClickEvent = this.handleEdccModalClickEvent.bind(this);
    this.handleTreehouseModalClickEvent = this.handleTreehouseModalClickEvent.bind(this);
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

  handleNavIconClickEvent(e) {
    e.preventDefault();
    this.setState({navIsOpen: !this.state.navIsOpen});
  }

  handleWindowResize() {
    var width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    this.setState({windowWidth: width});
  }

  handleEscapeKey(e) {
    console.log(e);
  }


  render() {
    window.onresize = this.handleWindowResize;

    return (
      <div className='app'>
        <h1 className='SEO'> ReactJS,JavaScript,NodeJS,Node,react,html,css,sass,scss,express,html5,css3,loops,arrays,michael,miller,d,dean,software,web,developer,front,end,front-end,back-end,Michael Miller,Michael D Miller </h1>


        {/* Here we use a ternary operator to determine that the mobile version of the application will be displayed if the window width is less than or equal to 1024px*/}


        {this.state.windowWidth <= 1024 ?
          <div className='mobile-app'>


            <Header />


            {/*Here I am using a Router to show only the sections of the page that are selected from the nav menu.*/}
            <Router
              basename='/'
            >
              <main className='mobile-app-main'>
                <Route exact path='/'
                  render={() =>
                    <div className='mobile-app-top'>
                      <About />
                    </div>
                  }
                />


                <Route path='/projects'
                  render={() =>
                    <div className='mobile-app-middle'>
                      <Projects
                        githubRepos={this.state.githubRepos}
                        windowWidth={this.state.windowWidth}
                      />
                    </div>
                  }
                />


                <Route path='/Education'
                  render={() =>
                    <div className='mobile-app-bottom'>
                      <Education
                        handleCodeFellowsModalClickEvent = {this.handleCodeFellowsModalClickEvent}
                        handleEdccModalClickEvent = {this.handleEdccModalClickEvent}
                        handleTreehouseModalClickEvent = {this.handleTreehouseModalClickEvent}
                      />
                    </div>
                  }
                />

              </main>
            </Router>


            {this.state.navIsOpen ?
              <Nav
                handleNavIconClickEvent={this.handleNavIconClickEvent}
              /> :
              <NavIcon
                handleNavIconClickEvent={this.handleNavIconClickEvent}
              />
            }

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

          /*Here we render the normal application because the ternary operator returned false.*/

          :



          <div className='standard-app'>
            <Header />


            <main className='standard-app-main'>
              <div className='standard-app-left'>
                <About />
              </div>


              <div className='standard-app-middle'>
                <Projects
                  githubRepos={this.state.githubRepos}
                />
              </div>


              <div className='standard-app-right'>
                <Education
                  handleCodeFellowsModalClickEvent = {this.handleCodeFellowsModalClickEvent}
                  handleEdccModalClickEvent = {this.handleEdccModalClickEvent}
                  handleTreehouseModalClickEvent = {this.handleTreehouseModalClickEvent}
                />
              </div>
            </main>



            {this.state.navIsOpen ?
              null :
              <NavIcon
                handleNavIconClickEvent={this.handleNavIconClickEvent}
              />
            }


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
        }



      </div>
    );
  }
}

export default App;
