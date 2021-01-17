import React from 'react';
import Contact from '../contact/Contact';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useSpring, animated} from 'react-spring';
import './Styles.scss';

const NavBar = () => {
    const props = useSpring({
        opacity: 1, 
        from: {opacity: 0},
        config: {duration: 1500}
    })

    return(
        <div className="navBar">
            <Row className="justify-content-center align-items-center">
                <Col xs={4}>
                    <p>Home</p>
                </Col>
                <Col xs={4}>
                    <p>Projects</p>
                </Col>
                <Col xs={4}>
                    <p>Contact</p>
                </Col>
            </Row>
        </div>
    ); 

}
export default NavBar;