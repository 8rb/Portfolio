import React from 'react';
import { Media } from 'reactstrap';
import Pokeball from '../images/pokeffective.png';
import InterlabLogo from '../images/interlab.png';
import { Link } from 'react-router-dom';
import Contact from './ContactComponent';

function ProjectsHeader() {
    return(
        <div>
            <div className="container pt-3 pb-3">
                <div className="row justify-content-center">
                    <Link className="nav-link" to="/home">
                        <div className="homeIcon">
                            <div className="row justify-content-center">
                                <span className="row fas fa-angle-up fa-2x"></span>
                            </div>
                            <div className="row justify-content-center">
                                <h3 className="row">Home</h3>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="container pb-4">
                <div className="row justify-content-center align-items-center">
                    <div className="col-auto offset-0">
                        <h1>My</h1>
                    </div>
                    <div className="col-auto offset-0">
                        <h1>Projects</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Pokeffective() {
    return(
        <div>
            <div className="row justify-content-center align-items-center mt-4 mt-sm-0 mb-2 proyectCard">
                <div className="col-12 col-sm-2 container mb-5 mt-4">
                    <Media left middle className="iconCool row justify-content-center"
                        href="https://pokeffective.onrender.com/" target="_blank" rel="noopener noreferrer">
                        <Media object className="pokeball" src={Pokeball} alt="Pokeffective"></Media>
                    </Media>
                </div>
                <div className="col-12 col-sm-6 mt-4 mb-2">
                    <Media body className="ml-4">
                        <h3>Pokeffective</h3>
                        <p className="mb-4">Pokeffective is a Pokemon type calculator, developed in Vue.js. I was in charge of the design, and the programming of this Application, and was made using responsive design and UX techniques.</p>
                        <a href="https://github.com/8rb/Pokeffective2" target="_blank" rel="noopener noreferrer">
                            <i className="codeIcon fas fa-code fa-2x"></i>
                        </a>
                        <a href="https://pokeffective.onrender.com/" target="_blank" rel="noopener noreferrer">
                            <i className="projectIcon fas fa-external-link-alt fa-2x ml-4"></i>
                        </a>
                    </Media>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <hr></hr>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Interlab() {
    return(
        <div>
            <div className="row justify-content-center align-items-center mt-4 mt-sm-0 mb-2 proyectCard">
                <div className="col-12 col-sm-2 container mb-5 mt-4">
                    <Media left middle className="iconCool row justify-content-center"
                        href="https://interlab.onrender.com/#/" target="_blank" rel="noopener noreferrer">
                        <Media object className="interlabLogo rounded-circle" src={InterlabLogo} alt="InterLab"
                            >
                        </Media>
                    </Media>
                </div>
                <div className="col-12 col-sm-6 mt-4 mb-2">
                    <Media body className="ml-4">
                        <h3>InterLab</h3>
                        <p className="mb-4">Interlab is a LinkedIn clone, developed in Vue.js in the Front-End and .Net Core in the backend. I was in charge of the Majority of the Front-End programming and the database design.</p>
                        <a href="https://github.com/8rb/interlab-webapps" target="_blank" rel="noopener noreferrer">
                            <i className="codeIcon fas fa-code fa-2x"></i>
                        </a>
                        <a href="https://interlab.onrender.com/#/" target="_blank" rel="noopener noreferrer">
                            <i className="projectIcon fas fa-external-link-alt fa-2x ml-4"></i>
                        </a>
                    </Media>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <hr></hr>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Projects() {
        return(
            <div className="main">
                <ProjectsHeader/>
                <Pokeffective/>
                <Interlab/>
                <div className="blank">
                    
                </div>
                <footer className="footer fixed-bottom">
                    <Contact/>
                </footer>
            </div>
        )
}

export default Projects;