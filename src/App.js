import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.scss';
import { HashRouter } from 'react-router-dom';

class App extends Component {
  
  render() {
    return(
      <HashRouter>
        <Main/>
      </HashRouter>
    )
  }
}

export default App;
