import React from 'react';
import Contact from '../contact/Contact';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useSpring, animated} from 'react-spring';
import './Styles.scss';

const Home = () => {
    const props = useSpring({
        opacity: 1, 
        from: {opacity: 0},
        config: {duration: 1500}
    })

    return(
        <div className="home">
            <div className="container-fluid">
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
                    </Col>
                </Row>
                <Row className="align-items-center footer-height">
                    <Col>
                        <Contact/>
                    </Col>
                </Row>
            </div>
        </div>
    ); 

}
export default Home;
