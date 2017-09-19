import './_header.scss';
import React from 'react';
import Nav from '../nav';

class Header extends React.Component{

  render() {
    return (
      <header className='app-header'>
        <Nav
          className='app-nav'
        />

        <h2 className='header-h2' >Michael Miller</h2>
      </header>
    );
  }
}

export default Header;
