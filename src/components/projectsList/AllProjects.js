import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {
  Switch,
  Route,
  useRouteMatch,
  useHistory,
  Link
} from "react-router-dom";
import PokeAppImg from '../../assets/PokeApp.jpg';
import Project from '../project/Project';
import BodegaImg from '../../assets/Bodega.jpg';
import InterLabImg from '../../assets/InterLab.jpg';
import './Styles.scss';

const AllProjects = () => {
  let match = useRouteMatch();
  return (
    <>
    <div className="container-fluid">
    <Switch>
      <Route path={`${match.path}/pokeapp`}>
        <Project index={0}/>
      </Route>
      <Route path={`${match.path}/bodega`}>
        <Project index={1}/>
      </Route>
      <Route path={`${match.path}/interlab`}>
        <Project index={2}/>
      </Route>
      {/* <Row className="title-div align-items-center justify-content-start">
        <Col xs="auto">
          <h1 className="title">Projects</h1>
        </Col>
      </Row> */}
      <Row className="align-items-center justify-content-center projects">
        <Col xs="auto">
          <Row className="align-items-center justify-content-center full-height">
            <Col xs={12} sm={6} md={6} lg={4} className="">
              <Link to='/projects/pokeapp'>
                <img className="image" src={PokeAppImg} alt="project"/>
              </Link>
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}  className="">
              <Link to='/projects/bodega'>
                <img className="image" src={BodegaImg} alt="project"/>
              </Link>
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}  className="">
              <Link to='/projects/interlab'>
                <img className="image" src={InterLabImg} alt="project"/>
              </Link>
            </Col>
            {/* <Col xs={12} sm={6} md={4} className="mt-4 mb-4">
              <img className="image mx-auto d-block" src={PokeApp} alt="project"/>
            </Col>
            <Col xs={12} sm={6} md={4} className="mt-4 mb-4">
              <img className="image mx-auto d-block" src={Bodega} alt="project"/>
            </Col>
            <Col xs={12} sm={6} md={4} className="mt-4 mb-4">
              <img className="image mx-auto d-block" src={InterLab} alt="project"/>
            </Col> */}
          </Row>
        </Col>
      </Row>
      </Switch>
    </div>
    </>
  );
}

export default AllProjects;