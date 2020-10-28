import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.scss';
import { HashRouter } from 'react-router-dom';

class App extends Component {
  
  render() {
    console.log("Rendering app");
    return(
      <HashRouter>
        <div>
          <Main/>
        </div>
      </HashRouter>
    )
  }
}

export default App;
