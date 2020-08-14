import React, { Component } from 'react';
import Home from './HomeComponent';
import Projects from './ProjectsComponent';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

class Main extends Component {

    render(){
        return(
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
        );
    }
}
export default withRouter(Main);
