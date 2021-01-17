import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PokeApp from '../../images/PokeApp.jpg';
import './Styles.scss';

const Project = () => {
  return (
    <>
    <Row className="align-items-center justify-content-center nav-div">
      <Col xs="auto">
        My Projects
      </Col>
    </Row>
    <Row className="align-items-center justify-content-center title-div">
      <Col xs="auto">
        Project Title
      </Col>
    </Row>
    <Row className="align-items-center justify-content-center project-div">
      <Col xs="auto">
        <Row className="align-items-center justify-content-center full-height">
          <Col xs={12} sm={6} className="mt-4 mb-4">
            <p>Project Description...</p>
          </Col>
          <Col xs={12} sm={6} className="mt-4 mb-4">
            <img className="image mx-auto d-block" src={PokeApp} alt="project"/>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row className="align-items-center justify-content-center links-div">
    <Col xs="auto">
        <Row className="align-items-center justify-content-center full-height">
          <Col xs={12} sm={6} className="mt-4 mb-4">
            <button>Github</button>
          </Col>
          <Col xs={12} sm={6} className="mt-4 mb-4">
            <button>See Live</button>
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

export default Project;