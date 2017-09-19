import React from 'react';

import CodeWarsContainer from '../codewars';
import NavDropdownApp from '../nav';
import PageHeaderApp from '../header';

class App extends React.Component {
  render() {
    return (
      <div>

        <NavDropdownApp className='app-nav'/>

        <PageHeaderApp className='app-header' />

        <div className='app-left'>
          <CodeWarsContainer />
        </div>

        <div className='app-middle'>

        </div>

        <div className='app-right'>

        </div>

        <footer className='app-footer'>

        </footer>

      </div>
    );
  }
}

export default App;
