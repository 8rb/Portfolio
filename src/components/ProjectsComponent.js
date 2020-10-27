import React, { Component } from 'react';
import { Media } from 'reactstrap';
import Pokeball from '../images/pokeffective.png';
import InterlabLogo from '../images/interlab.png';
import FinanceAppLogo from '../images/FinanceeApp.png';
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
                        <a href="https://github.com/8rb/Pokeffective" target="_blank" rel="noopener noreferrer">
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
                        <Media object className="roundedLogo rounded-circle" src={InterlabLogo} alt="InterLab"
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

function FinanceeApp() {
    return(
        <div>
            <div className="row justify-content-center align-items-center mt-4 mt-sm-0 mb-2 proyectCard">
                <div className="col-12 col-sm-2 container mb-5 mt-4">
                    <Media left middle className="iconCool row justify-content-center"
                        href="https://financeeapp.onrender.com" target="_blank" rel="noopener noreferrer">
                        <Media object className="roundedLogo rounded-circle" src={FinanceAppLogo} alt="FinanceeApp"
                            >
                        </Media>
                    </Media>
                </div>
                <div className="col-12 col-sm-6 mt-4 mb-2">
                    <Media body className="ml-4">
                        <h3>FinanceeApp</h3>
                        <p className="mb-4">FinanceeApp is an online shopping website, based on Peruvian "Bodegas". It was developed in Vue and Typescript, and uses bootstrap and SCSS for the UI elements. This project takes advantage of the Vuex Store functionalities and uses Axios to make HTTP requests to the Server.</p>
                        <a href="https://github.com/8rb/FinanciApp-FrontEnd" target="_blank" rel="noopener noreferrer">
                            <i className="codeIcon fas fa-code fa-2x"></i>
                        </a>
                        <a href="https://financeeapp.onrender.com" target="_blank" rel="noopener noreferrer">
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

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isPhone: false
        };
        this.updateFooter = this.updateFooter.bind(this);
    }
    componentDidMount() {
        this.updateFooter();
        window.addEventListener("resize", this.updatePredicate);
      }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }
    
    updateFooter() {
        this.setState({ isPhone: window.innerWidth < 576 });
    }

    render() {
        const isPhone = this.state.isPhone;
        return(
            <div className="container main">
                <ProjectsHeader/>
                <Pokeffective/>
                <Interlab/>
                <FinanceeApp/>
                <div>
                    {isPhone ? (
                    <div className="blank">
                        <footer className="footer">
                            <Contact/>
                        </footer>
                    </div>
                    ) : (
                    <footer className="footer">
                        <Contact/>
                    </footer>
                    )}
                </div>
            </div>
        );
    }
}

export default Projects;