import './_nav.scss';

import React, { Component } from 'react';
import {BrowserRouter, Link} from 'react-router-dom';

import Icon from '../icon';

class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <div className='nav-menu'>
        <BrowserRouter
          forceRefresh={true}
        >
          <ul className='nav-menu-ul'>
            <li>
              <Icon
                className='nav-menu-ul-close-menu'
                icon='menu'
                width='50'
                height='50'
                onClick={this.props.handleNavIconClickEvent}
              />
            </li>

            <li className='nav-menu-ul-home'>
              <Link
                to='/'>
                Home
              </Link>
            </li>

            <li className='nav-menu-ul-education'>
              <Link
                to='/education'>
                Education
              </Link>
            </li>

            <li className='nav-menu-ul-projects'>
              <Link
                to='/projects'>
                Projects
              </Link>
            </li>

          </ul>
        </BrowserRouter>
      </div>
    );
  }
}

export default Nav;
