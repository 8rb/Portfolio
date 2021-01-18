import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PokeApp from '../../images/PokeApp.jpg';
import projectsInfo from '../../json/projects';
import './Styles.scss';

const Project = ({index}) => {
  return (
    <>
    <Row className="align-items-center project-div">
      <Col xs="auto">
        <Row className="align-items-center">
          <Col xs={12} sm={6}>
            <Row className="justify-content-center">
              <Col xs="auto">
                <img className="imageP" src={projectsInfo[index].img} alt="project"/>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={6}>
            <Row className="justify-content-start">
              <Col xs={12}>
                <h1 className="titleP">{projectsInfo[index].title}</h1>
              </Col>
            </Row>
            <Row className="justify-content-start">
              <Col>
                {projectsInfo[index].tags.map((tag, i) =>
                  <div className="tag-div" key={i}><p className="tag">{tag}</p></div>
                )}
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <div className="text-div">
                  <p className="text">{projectsInfo[index].description}</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row className="align-items-center links-div">
      <Col xs={12}>
        <Row className="align-items-center">
          <Col xs={12} sm={6}>
            <a className="btn github" href={projectsInfo[index].github_link} target="_blank" rel="noopener noreferrer">Github Repo</a>
          </Col>
          <Col xs={12} sm={6}>
            <a className="btn live" href={projectsInfo[index].deployed_link} target="_blank" rel="noopener noreferrer">Live Site</a>
          </Col>
        </Row>
      </Col>
    </Row>
    </>
  );
}

export default Project;