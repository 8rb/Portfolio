import React from 'react';
import Contact from './ContactComponent';
import { Link } from 'react-router-dom';
import Toggle from './Toggle';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomeFooter() {
    return(
        <Row className="myprojects-height align-items-center">
            <Col xs={12} className="justify-content-center">
                <Link className="nav-link auto-height" to="/projects">
                    <div className="homeArrow">
                        <Row className="justify-content-center">
                            <Col xs="auto">
                                <h3>My Projects</h3>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs="auto">
                                <span className="fas fa-angle-down fa-2x"></span>
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
                <Col xs={12}>
                    <Row>
                        <Toggle/>
                    </Row>
                </Col>
            </Row>
            <Row className="align-items-center home-height">
                <Col xs={12}>
                    <Row className="justify-content-center">
                        <Col xs={12}>
                            <h1 className="centered-text">Rodrigo Ramirez</h1>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs={6} sm={10} md={4} lg={4}>
                            <hr></hr>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs={12}>
                            <h2 className="centered-text">Front-End Developer</h2>
                        </Col>
                    </Row>
                    <Contact/>
                </Col>
            </Row>
            <HomeFooter></HomeFooter>
        </div>
    ); 

}
export default Home;
