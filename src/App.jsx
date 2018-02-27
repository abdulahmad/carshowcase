import React, { Component } from 'react';
import Homepage from './components/homepage/Homepage/Homepage';
// import HtmlHead from './components/HtmlHead/HtmlHead';
// import Page from './components/Page/Page';

class App extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="App">
        <Homepage />
      </div>
    );
  }
}

export default App;
