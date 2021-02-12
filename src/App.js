import React from 'react';
import NavBar from './components/navBar/NavBar';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Contact from './components/contactPage/Contact';

const App = () => {

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
                <Projects/>
            </Route>
            <Route path="/contact">
                <Contact/>
            </Route>
            <Route path="*">
                <Redirect to="/"/>
            </Route>
          </Switch>
        </div>
        <div className="footer-content">
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
