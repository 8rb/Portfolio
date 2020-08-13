import React, { Component } from 'react';
import Home from './HomeComponent';
import Projects from './ProjectsComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component {

    render(){
        return(
            <div>
                <Switch>
                    <Route path="/home" component={() => <Home/>}/>
                    <Route exact path="/projects" component={() => <Projects/>}/>
                    <Redirect to="/home"/>
                </Switch>
            </div>
        );
    }
}
export default withRouter(Main);
