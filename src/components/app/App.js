import './_App.scss';
import React from 'react';
import Header from '../header';
import About from '../about';
import Footer from '../footer';
import Projects from '../projects';
import Education from '../education';
import Treehouse from '../treehouse';

class App extends React.Component {
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
          <Education />
          <Treehouse />
        </div>

        <footer className='app-footer'>
          <Footer />
        </footer>

      </div>
    );
  }
}

export default App;
