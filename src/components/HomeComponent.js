import React from 'react';
import { Jumbotron } from 'reactstrap';
import Contact from './ContactComponent';
import { Link } from 'react-router-dom';

function HomeFooter() {
    return(
        <div className="container">
            <div className="row justify-content-center">
                <Link className="nav-link" to="/projects">
                    <div className="homeIcon">
                        <div className="row justify-content-center">
                            <h3 className="row">My Projects</h3>
                        </div>
                        <div className="row justify-content-center">
                            <span className="row fas fa-angle-down fa-2x"></span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

function Home() {

    return(
        <div className="main">
            <Jumbotron className="row align-items-center home">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-auto offset-0">
                            <h1>Rodrigo</h1>
                        </div>
                        <div className="col-auto offset-0">
                            <h1>Ramirez</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <hr className="col-5"></hr>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-auto offset-0">
                            <h2>Front-End</h2>
                        </div>
                        <div className="col-auto offset-0">
                            <h2>Developer</h2>
                        </div>
                    </div>
                    <Contact/>
                </div>
            </Jumbotron>
            <HomeFooter></HomeFooter>
        </div>
    ); 

}
export default Home;
