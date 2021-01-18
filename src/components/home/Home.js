import React from 'react';
import Contact from '../contact/Contact';
import { Link } from 'react-router-dom';
import Toggle from '../toggle/Toggle';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useSpring, animated} from 'react-spring';
import {Spring} from 'react-spring/renderprops';
import './Styles.scss';

const Footer = () => {
    const myProjectsProps = useSpring({
        opacity: 1, 
        from: {opacity: 0},
        config: {duration: 1000}
    })
    return(
        <Row className="justify-content-center myprojects-height">
            <Col xs="auto">
                <Link className="nav-link" to="/projects">
                    <animated.div style={myProjectsProps}>
                        <Row className="justify-content-center">
                            <Col xs="auto">
                                <h3>My Projects</h3>
                            </Col>
                        </Row>
                        <Row className="justify-content-center homeArrow">
                            <Col xs="auto">
                                <span className="fas fa-angle-down fa-2x"></span>
                            </Col>
                        </Row>
                    </animated.div>
                </Link>
            </Col>
        </Row>
    )
}

const Home = () => {
    const props = useSpring({
        opacity: 1, 
        from: {opacity: 0},
        config: {duration: 1500}
    })

    return(
        <div className="home">
            <div className="container-fluid">
                {/* <Row className="align-items-center toggle-height">
                    <Col xs={12}>
                        <Row>
                            <Spring
                                from={{marginTop: -100 }}
                                to={{marginTop: 0 }}
                                config={{delay: 0, duration: 600}}
                            >
                                { props => (
                            <div style={props}>
                                <Toggle/>
                            </div>
                                )}
                            </Spring>
                        </Row>
                    </Col>
                </Row> */}
                <Row className="align-items-center home-height">
                    <Col xs={12}>
                        <Row className="justify-content-center">
                            <Col xs={12}>
                                <animated.div style={props}>
                                    <h1 className="centered-text name">Rodrigo Ramirez</h1>
                                </animated.div>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12}>
                                <animated.div style={props}>
                                    <h2 className="centered-text job">Front-End Developer</h2>
                                </animated.div>
                            </Col>
                        </Row>
                        <Contact/>
                    </Col>
                </Row>
                {/* <Footer/> */}
            </div>
        </div>
    ); 

}
export default Home;
