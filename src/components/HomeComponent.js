import React from 'react';
import Contact from './ContactComponent';
import { Link } from 'react-router-dom';
import Toggle from './Toggle';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomeFooter() {
    return(
        <Row className="justify-content-center myprojects-height">
            <Col xs="auto" className="justify-content-center myprojects-height">
                <Link className="nav-link" to="/projects">
                    <div className="homeIcon">
                        <Row className="justify-content-center">
                            <Col>
                                <h3 className="row">My Projects</h3>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs="auto">
                                <span className="row fas fa-angle-down fa-2x"></span>
                            </Col>
                        </Row>
                    </div>
                </Link>
            </Col>
        </Row>
    );
}

function Home() {
    return(
        <div className="home">
            <Row className="align-items-center toggle-height">
                <Col>
                    <Row>
                        <Toggle/>
                    </Row>
                </Col>
            </Row>
            <Row className="align-items-center home-height">
                <Col>
                    <Row className="justify-content-center">
                        <Col xs={12}>
                            <h1 className="centered-text">Rodrigo Ramirez</h1>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs={4}>
                            <hr></hr>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs={12}>
                            <h2 className="centered-text">Front-End Developer</h2>
                        </Col>
                    </Row>
                    <div className="row mt-4">
                        <Contact/>
                    </div>
                </Col>
            </Row>
            <HomeFooter></HomeFooter>
        </div>
    ); 

}
export default Home;
