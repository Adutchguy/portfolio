import './_footer.scss';
import React, { Component } from 'react';

import Icon from '../icon';

class Footer extends React.Component {

  render() {
    return (
      <div className="icon-container">
        <ul className="icon-ul">
          <li className="icon-li icon1">
            <a href="mailto:mdm_8@hotmail.com" target="_top">
              <Icon
                icon='outlook'
                className='icon-outlook'
              />
            </a>
          </li>

          <li className="icon-li icon2">
            <a href="https://www.facebook.com/mimiller86" target="_blank">
              <Icon
                icon='facebook'
                className='icon-facebook'
              />
            </a>
          </li>

          <li className="icon-li icon3">
            <a href="https://github.com/Adutchguy" target="_blank">
              <Icon
                icon='github'
                className='icon-github'
              />
            </a>
          </li>

          <li className="icon-li icon4">
            <a href="https://www.linkedin.com/in/mimiller86/" target="_blank">
              <Icon
                icon='linkedin'
                className='icon-linkedin'
              />
            </a>
          </li>
        </ul>
      </div>
    );
  }

}

export default Footer;
