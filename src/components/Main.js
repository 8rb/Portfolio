import React, { Component } from 'react';
import Home from './Home';
import Projects from './Projects';
import AllProjects from './AllProjects/AllProjects';
import Project from './Project/Project';
import { Switch, Route, withRouter, Redirect, BrowserRouter } from 'react-router-dom';

class Main extends Component {

    render(){
        return(
            <BrowserRouter>
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
            </BrowserRouter>
        );
    }
}
export default withRouter(Main);
