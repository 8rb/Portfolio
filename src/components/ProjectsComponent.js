import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Contact from './ContactComponent';
import projects from '../json/projects';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function ProjectsHeader() {
    return(
        <Row>
            <Col className="pt-3 pb-3" xs={12}>
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
            </Col>
            <Col className="pb-4" xs={12}>
                <div className="row justify-content-center align-items-center">
                    <div className="col-auto offset-0">
                        <h1>My</h1>
                    </div>
                    <div className="col-auto offset-0">
                        <h1>Projects</h1>
                    </div>
                </div>
            </Col>
        </Row>
    );
}

const projectsList = projects.map(item =>
        <Row key={item.id} className="align-items-center justify-content-center pt-4 pb-4">
            <Col xs={12} sm={4} md={4} lg={2}>
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <a href={item.deployed_link} target="_blank" rel="noopener noreferrer">
                            <Image src={item.img} className={item.img_classname}></Image>
                        </a>
                    </Col>
                </Row> 
            </Col>
            <Col xs={10} sm={7} md={7} lg={6} className="mt-5 mt-sm-0">
                <Row className="justify-content-center justify-content-sm-start">
                    <Col xs="auto">
                        <h3>{item.title}</h3>
                    </Col>
                </Row>
                <Row className="justify-content-center justify-content-sm-start">
                    <Col xs="auto" sm={12}>
                        <p className="justified-text">{item.description}</p>
                    </Col>
                </Row>
                <Row className="justify-content-center justify-content-sm-start">
                    <Col xs="auto">
                        <a href={item.github_link} target="_blank" rel="noopener noreferrer">
                            <i className="codeIcon fas fa-code fa-2x"></i>
                        </a>
                    </Col>
                    <Col xs="auto">
                        <a href={item.deployed_link} target="_blank" rel="noopener noreferrer">
                            <i className="projectIcon fas fa-external-link-alt fa-2x"></i>
                        </a>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} className="mt-4">
                <Row className="justify-content-center">
                    <Col xs={10} sm={8} md={8} lg={6}>
                        <hr></hr>
                    </Col>
                </Row>
            </Col>
        </Row>
    );

class Projects extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div>
                <ProjectsHeader/>
                {projectsList}
                <footer className="footer">
                    <Contact/>
                </footer>
            </div>
        );
    }
}

export default Projects;