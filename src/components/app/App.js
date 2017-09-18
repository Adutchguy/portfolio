import React, { Component } from 'react';
import {Grid,Jumbotron} from 'react-bootstrap';
import NavDropdownApp from '../nav';
import PageHeaderApp from '../header';

class App extends Component {
  render() {
    return (
      <div>

        <NavDropdownApp />

        <PageHeaderApp />

        <Jumbotron>

          <Grid>

            <h1>Portfolio</h1>

            <p>This is Michael's portfolio.</p>

          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
