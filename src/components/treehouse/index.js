import './_treehouse.scss';
import React, { Component } from 'react';

import TreehouseItems from './treehouse-item';

class Treehouse extends React.Component {

  render() {
    return (
      <div onClick={this.props.handleModalClickEvent} className='treehouse'>
        <div className='treehouse-body'>
          <TreehouseItems
            badges={this.props.badges}
          />
        </div>
      </div>
    );
  }
}

export default Treehouse;
