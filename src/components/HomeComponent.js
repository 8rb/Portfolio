import React from 'react';
import { Jumbotron } from 'reactstrap';
import Pdf from '../Documents/Rodrigo_Ramirez_Resume_2020.pdf';
import { Link } from 'react-router-dom';

function Home() {
        return(
            <Jumbotron className="row align-items-center home bg">
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
                        <hr className="col-5 bg-primary"></hr>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-auto offset-0">
                            <h2>Front-End</h2>
                        </div>
                        <div className="col-auto offset-0">
                            <h2>Developer</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-auto col-sm-auto">
                            <div className="row mt-4">
                                <a className="col-3" href={Pdf} target ="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-file-pdf fa-2x"></i>
                                </a>
                                <a className="col-3" href="https://github.com/8rb" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github fa-2x"></i>
                                </a>
                                <a className="col-3" href="https://www.linkedin.com/in/rodrigo-ramirez8/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin-in fa-2x"></i>
                                </a>
                                <a className="col-3" href="mailto:rodrigo8rb@hotmail.com">
                                    <i className="fas fa-envelope fa-2x"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <Link className="nav-link" to="/projects">
                            <span className="fas fa-angle-down fa-2x"></span>
                        </Link>
                    </div>
                </div>
            </Jumbotron>
        );
}
export default Home;
