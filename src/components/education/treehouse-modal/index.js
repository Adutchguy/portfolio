import './_treehouse-modal.scss';
import React, { Component } from 'react';

import TreehouseItems from './treehouse-items';

class TreehouseModal extends React.Component {
  constructor(props){
    super(props);

    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleOutsideClick(e) {
    if (e.target.parentNode.className !== 'app') {
      return;
    }
    this.props.handleTreehouseModalClickEvent(e);
  }

  render() {
    return (
      <div onClick={this.handleOutsideClick} className='treehouse-modal'>
        <div className='treehouse-modal-body'>
          <h3> Badges(or skills) Earned </h3>
          <TreehouseItems
            badges={this.props.badges}
          />
        </div>
      </div>
    );
  }
}

export default TreehouseModal;
