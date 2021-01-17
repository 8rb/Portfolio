import React, { Component } from 'react';
import Content from './components/content/Content';
import NavBar from './components/navBar/NavBar';
import './App.scss';

class App extends Component {
  
  render() {
    return(
      <>
        <NavBar/>
        <Content/>
      </>
    )
  }
}

export default App;
