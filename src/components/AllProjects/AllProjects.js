import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PokeApp from '../../images/PokeApp.jpg';
import './Styles.scss';

function AllProjects() {

  return (
    <>
    <Row className="align-items-center justify-content-center nav-div">
      <Col xs="auto">
        Home
      </Col>
    </Row>
    <Row className="align-items-center justify-content-center title-div">
      <Col xs="auto">
        <h1>My Projects</h1>
      </Col>
    </Row>
    <Row className="align-items-center justify-content-center projects-div">
      <Col xs="auto">
        <Row className="align-items-center justify-content-center full-height">
          <Col xs={12} sm={6} md={4} className="mt-4 mb-4">
            <img className="image mx-auto d-block" src={PokeApp} alt="project"/>
          </Col>
          <Col xs={12} sm={6} md={4} className="mt-4 mb-4">
            <img className="image mx-auto d-block" src={PokeApp} alt="project"/>
          </Col>
          <Col xs={12} sm={6} md={4} className="mt-4 mb-4">
            <img className="image mx-auto d-block" src={PokeApp} alt="project"/>
          </Col>
          <Col xs={12} sm={6} md={4} className="mt-4 mb-4">
            <img className="image mx-auto d-block" src={PokeApp} alt="project"/>
          </Col>
          <Col xs={12} sm={6} md={4} className="mt-4 mb-4">
            <img className="image mx-auto d-block" src={PokeApp} alt="project"/>
          </Col>
          <Col xs={12} sm={6} md={4} className="mt-4 mb-4">
            <img className="image mx-auto d-block" src={PokeApp} alt="project"/>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row className="align-items-center justify-content-center contact-div">
      <Col xs="auto">
        Contact
      </Col>
    </Row>
    </>
  );
}

export default AllProjects;