import './_footer.scss';
import React, { Component } from 'react';

class Footer extends React.Component {

  render() {
    return (
      <div>
        <div className='footer-body'>
          <header className='footer-header'>
            <div>
              Header of footer component
            </div>
          </header>

          <main className='footer-main'>
            <div>
              main of footer component
            </div>
          </main>
        </div>
      </div>
    );
  }

}

export default Footer;
