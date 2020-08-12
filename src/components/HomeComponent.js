import React from 'react';
import { Jumbotron } from 'reactstrap';
import Pdf from '../Documents/Rodrigo_Ramirez_Resume_2020.pdf';

function Home() {
        return(
            <Jumbotron>
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
                        <hr className="col-6 bg-primary"></hr>
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
                                <a className="col-3" href={Pdf} target ="_blank">
                                    <i className="fas fa-file-pdf fa-lg"></i>
                                </a>
                                <a className="col-3" href="https://github.com/8rb" target="_blank">
                                    <i className="fab fa-github fa-lg"></i>
                                </a>
                                <a className="col-3" href="https://www.linkedin.com/in/rodrigo-ramirez8/" target="_blank">
                                    <i className="fab fa-linkedin-in fa-lg"></i>
                                </a>
                                <a className="col-3" href="mailto:rodrigo8rb@hotmail.com">
                                    <i className="fas fa-envelope fa-lg"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        );
}
export default Home;
