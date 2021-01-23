import React, { Component } from 'react';
import NavBar from './components/navBar/NavBar';
import Home from './components/home/Home';
import AllProjects from './components/projectsList/AllProjects';
import './App.scss';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
class App extends Component {
  
  render() {
    return(
      <div className="theme">
        <Router>
          <div className="navbar-content">
            <NavBar/>
          </div>
          <div className="main-content">
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
      </div>
    )
  }
}

export default App;
