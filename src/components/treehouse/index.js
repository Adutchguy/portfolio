import './_treehouse.scss';
import React, { Component } from 'react';

import TreehouseItems from './treehouse-item';

class Treehouse extends React.Component {

  render() {
    return (
      <div>
        <div className='treehouse-body'>
          <TreehouseItems />
        </div>
      </div>
    );
  }
}

export default Treehouse;
