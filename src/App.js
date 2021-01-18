import React, { Component } from 'react';
import NavBar from './components/navBar/NavBar';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import AllProjects from './components/projectsList/AllProjects';
import './App.scss';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
class App extends Component {
  
  render() {
    return(
      <Router>
        <NavBar/>
        <div className="theme content">
          <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/projects">
                {/* <Project/> */}
                <AllProjects/>
                {/* <Projects/> */}
            </Route>
            <Route path="*">
                <Redirect to="/"/>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
