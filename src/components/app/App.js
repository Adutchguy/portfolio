import './_App.scss';
import React from 'react';
import Header from '../header';
import About from '../about';
import Education from '../education';
import Footer from '../footer';
import Projects from '../projects';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>ReactJS,JavaScript,NodeJS,Node,react,html,css,sass,scss,express,html5,css3,loops,arrays</h1>


        <Header />

        <div className='app-left'>
          <About />
        </div>

        <div className='app-middle'>
          <Projects />
        </div>

        <div className='app-right'>
          <Education />
        </div>

        <footer className='app-footer'>
          <Footer />
        </footer>

      </div>
    );
  }
}

export default App;
