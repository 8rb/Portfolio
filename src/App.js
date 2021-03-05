import React, {useEffect} from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import ParticlesBG from './components/particles/ParticlesBG';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

import { store } from './redux/store';
import { connect } from 'react-redux';

const App = () => {
  const [loading] = React.useState(true);

  const location = useLocation();

  const transitions = useTransition(location, location => location.pathname, {
    from: {
      position: 'absolute',
      width: '100%',
      opacity: 0,
      transform: 'translate(0,10%) translate3d(0, 0, 0)'
    },
    enter: {
      maxHeight: '100%',
      opacity: 1,
      transform: 'translate(0%,0) translate3d(0, 0, 0)' },
    leave: {
      opacity: 0, 
      transform: 'translate(-50%,0) translate3d(0, 0, 0)' }
  });

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [location])

  return(
    <>
    {loading &&
    <div className={`loadingScreen`}>
      <div className="lds-ripple"><div></div><div></div></div>
    </div>}
    <div className={`theme ${store.getState().theme}`}>
      <div className="navbar-content">
        <NavBar/>
      </div>
      {transitions.map(({ item: location, props, key }) => (
        <animated.div key={key} style={props} className="main-content">
          <Switch location={location}>
            <Route exact path="/" component={Home}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
            {/* <Route path="/about" component={About}/> */}
            <Route path="*"> <Redirect to="/"/> </Route>
          </Switch>
        </animated.div>
      ))}
      <div className="footer-content">
        <Footer/>
      </div>
      <ParticlesBG/>
    </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return { theme: state.theme };
};

export default connect(mapStateToProps)(App);