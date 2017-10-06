import './_nav-icon.scss';
import React from 'react';
import Icon from '../icon';

class Nav extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <nav onClick={this.props.handleNavIconClickEvent} className='nav'>
        <Icon
          icon='menu'
          className='nav-icon'
        />
      </nav>
    );
  }
}

export default Nav;
