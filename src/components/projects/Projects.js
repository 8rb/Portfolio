import React, { Component } from 'react';
import Contact from '../contact/Contact';
import projects from '../../json/projects';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const projectsList = projects.map(item =>
        <Row key={item.id} className={item.row_classname}>
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
                        <h4>{item.title}</h4>
                    </Col>
                </Row>
                <Row className="justify-content-center justify-content-sm-start mb-3 mb-sm-1 mt-3 mt-sm-1">
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
            <Col xs={12} className="mt-5">
                <Row className="justify-content-center">
                    <Col xs={10} sm={8} md={8} lg={6}>
                        <hr></hr>
                    </Col>
                </Row>
            </Col>
        </Row>
    );

class Projects extends Component {
    
    render() {
        return(
            <div className="container-fluid projects">
                <Row>
                    <Col>
                        {projectsList}
                        <footer className="footer">
                            <Contact/>
                        </footer>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Projects;