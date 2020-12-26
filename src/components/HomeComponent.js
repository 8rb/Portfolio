import React from 'react';
import Contact from './ContactComponent';
import { Link } from 'react-router-dom';
import Toggle from './Toggle';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useSpring, animated} from 'react-spring';
import {Spring} from 'react-spring/renderprops';

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
    const props = useSpring({
        opacity: 1, 
        from: {opacity: 0},
        config: {duration: 1500}
    })

    return(
        <div className="home">
            <Row className="align-items-center toggle-height">
                <Col xs={12}>
                    <Row>
                        <Spring
                            from={{marginTop: -500 }}
                            to={{marginTop: 0 }}
                            config={{delay: 100, duration: 1500}}
                        >
                            { props => (
                        <div style={props}>
                            <Toggle/>
                        </div>
                            )}
                        </Spring>
                    </Row>
                </Col>
            </Row>
            <Row className="align-items-center home-height">
                <Col xs={12}>
                    <Row className="justify-content-center">
                        <Col xs={12}>
                            <animated.div style={props}>
                                <h1 className="centered-text">Rodrigo Ramirez</h1>
                            </animated.div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs={6} sm={10} md={4} lg={4}>
                            <animated.div style={props}>
                                <hr></hr>
                            </animated.div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs={12}>
                            <animated.div style={props}>
                                <h2 className="centered-text">Front-End Developer</h2>
                            </animated.div>
                        </Col>
                    </Row>
                    <Contact/>
                </Col>
            </Row>
            <animated.div style={props}>
                <HomeFooter></HomeFooter>
            </animated.div>
        </div>
    ); 

}
export default Home;
