import './_nav.scss';
import React from 'react';

class Nav extends React.Component{
  handleSelect(event){
    event.preventDefault();
    console.log(event.target.value);
  }

  render() {
    return (
      <nav>
        <select
          onChange={this.handleSelect}
          className='nav-select'
          title="Dropdown"
          id="nav-dropdown"
        >

          <option
            selected
            className='nav-option'
          >Where To?</option>

          <option
            className='nav-option'
          >Another action</option>

          <option
            className='nav-option'
          >Something else here</option>

          <option
            className='nav-option'
          >Separated link</option>

        </select>
      </nav>
    );
  }
}

export default Nav;
