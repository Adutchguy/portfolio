import './_treehouse-item.scss';
import React, { Component } from 'react';
import superagent from 'superagent';

class TreehouseItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      badges: [],
    };
  }

  componentWillMount(){
    superagent('get', 'https://teamtreehouse.com/michaelmiller20.json')
      .then(res => {
        this.setState(() => this.state.badges = res.body.badges);
      })
      .catch(console.error());
  }

  render() {
    return (
      <ul className='treehouse-ul'>
        {this.state.badges.map((item,index) =>
          index > 0 ?
            <li className='treehouse-ul-li' key={index.toString()}>
              <h6>{item.name}</h6>
              <img src={item.icon_url} />
            </li>
            : null
        )}
      </ul>
    );
  }
}

export default TreehouseItems;
