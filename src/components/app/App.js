import React from 'react';
import NavDropdownApp from '../nav';
import PageHeaderApp from '../header';

class App extends React.Component {
  render() {
    return (
      <div>

        <NavDropdownApp className='app-nav'/>

        <PageHeaderApp className='app-header' />

        <div className='app-left'>
          app left
        </div>

        <div className='app-middle'>
          app middle
        </div>

        <div className='app-right'>
          app right
        </div>

        <footer className='app-footer'>
          footer
        </footer>

      </div>
    );
  }
}

export default App;
