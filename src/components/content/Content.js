import React from 'react';
import Home from '../home/Home';
import Projects from '../projects/Projects';
import AllProjects from '../allProjects/AllProjects';
import Project from '../project/Project';
import { Switch, Route, withRouter, Redirect, BrowserRouter as Router } from 'react-router-dom';

const Content = () => {
    return(
        <Router>
            <div className="theme">
                <div className="container-fluid">
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/projects">
                            {/* <Project/> */}
                            {/* <AllProjects/> */}
                            <Projects/>
                        </Route>
                        <Route path="*">
                            <Redirect to="/"/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}
export default Content;
