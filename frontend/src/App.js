import React, { Component } from 'react';
import logo from './logo.svg';
import {Grid,Row,Col} from 'react-bootstrap';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>TODO List v0.0.1</h2>
        </div>
        <Grid>
              <Row>
                   <Col xs={8} md={8} xsOffset={2} mdOffset={2}>
                        <Main/>
                   </Col>
              </Row>
        </Grid>
      </div>
    );
  }
}

export default App;