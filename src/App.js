import React, { Component } from 'react';
import {Grid,Jumbotron} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
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
