import React, { Component } from 'react';
import Home from './HomeComponent';
import Projects from './ProjectsComponent';
import { Switch, Route, withRouter, Redirect, HashRouter } from 'react-router-dom';

class Main extends Component {

    render(){
        return(
            <HashRouter>
                <div className="theme">
                    <div className="container-fluid">
                        <Switch>
                            <Route exact path="/">
                                <Home/>
                            </Route>
                            <Route path="/projects">
                                <Projects/>
                            </Route>
                            <Route path="*">
                                <Redirect to="/"/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </HashRouter>
        );
    }
}
export default withRouter(Main);
