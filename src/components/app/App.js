import './_App.scss';
import React from 'react';
import superagent from 'superagent';

import Header from '../header';
import About from '../about';
import Footer from '../footer';
import Projects from '../projects';
import Education from '../education';
import Treehouse from '../treehouse';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      treehouseModalIsOpen: false,
      badges: [],
    };
    this.handleModalClickEvent = this.handleModalClickEvent.bind(this);
  }

  componentWillMount(){
    superagent('get', 'https://teamtreehouse.com/michaelmiller20.json')
      .then(res => {
        this.setState({badges: res.body.badges});
      })
      .catch(console.error());
  }

  handleModalClickEvent(e) {
    e.preventDefault();
    this.setState({treehouseModalIsOpen: !this.state.treehouseModalIsOpen});
  }


  render() {
    return (
      <div className='app'>
        <h1 className='SEO'> ReactJS,JavaScript,NodeJS,Node,react,html,css,sass,scss,express,html5,css3,loops,arrays </h1>

        <Header />

        <div className='app-left'>
          <About />
        </div>

        <div className='app-middle'>
          <Projects />
        </div>

        <div className='app-right'>
          <Education
            handleModalClickEvent = {this.handleModalClickEvent}
          />
        </div>

        <footer className='app-footer'>
          <Footer />
        </footer>

        {this.state.treehouseModalIsOpen
          ?
          <Treehouse
            badges={this.state.badges}
            handleModalClickEvent = {this.handleModalClickEvent}
          />
          :
          null
        }
      </div>
    );
  }
}

export default App;
