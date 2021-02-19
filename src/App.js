import React from 'react';
import NavBar from './components/navBar/NavBar';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Contact from './components/contactPage/Contact';
import { store } from './redux/store';
import { connect } from 'react-redux'

class App extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  render() {
    return(
      <>
      {this.state.loading &&
      <div className={`loadingScreen`}>
        <div className="lds-ripple"><div></div><div></div></div>
      </div>
      }
      <div className={`theme ${store.getState().theme}`}>
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
      </>
    );
  }
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2000));
}

const mapStateToProps = (state) => {
  return { theme: state.theme };
};

// export default App;
export default connect(mapStateToProps)(App);