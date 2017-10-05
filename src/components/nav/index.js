import './_nav.scss';
import React from 'react';
import Icon from '../icon';

class Nav extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  render() {
    return (
      <nav>
        <Icon
          icon='menu'
        />
      </nav>
    );
  }
}

export default Nav;
