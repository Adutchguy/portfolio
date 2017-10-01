import './_treehouse-items.scss';
import React, { Component } from 'react';
import superagent from 'superagent';

class TreehouseItems extends React.Component {
  render() {
    return (
      <ul className='treehouse-ul'>
        {this.props.badges.map((item,index) =>
          index > 0 ?
            <li className='treehouse-ul-li' key={index.toString()}>
              <h6 className='treehouse-ul-li-h6'>{item.name}</h6>
              <img className='treehouse-ul-li-img' src={item.icon_url} />
            </li>
            : null
        )}
      </ul>
    );
  }
}

export default TreehouseItems;
