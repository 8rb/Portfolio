import React, { Component } from 'react';
import Home from './HomeComponent';
import Projects from './ProjectsComponent';
import { Switch, Route, withRouter, BrowserRouter as Router, Redirect } from 'react-router-dom';

class Main extends Component {

    render(){
        return(
            <Router>
                <div>
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
            </Router>
        );
    }
}
export default withRouter(Main);
