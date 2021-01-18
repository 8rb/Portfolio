import React from 'react';
import Contact from '../contact/Contact';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useSpring, animated} from 'react-spring';
import './Styles.scss';
import { Link } from 'react-router-dom';
import Toggle from '../toggle/Toggle';

const NavBar = () => {
    return(
        <div className="navBar">
            {/* <nav>
                <Row className="justify-content-start align-items-center">
                    <Col>
                        <Toggle/>
                    </Col>
                </Row>
            </nav> */}
            <nav>
                <div className="container-fluid">
                    <Row className="justify-content-center align-items-center">
                        <Col xs={6}>
                            <Link className="nav-link" to="/">Home</Link>
                        </Col>
                        <Col xs={6}>
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </Col>
                        {/* <Col xs={4}>
                            <Link to="/contact">Contact</Link>
                        </Col> */}
                    </Row> 
                </div>
            </nav>
        </div>
    ); 

}
export default NavBar;