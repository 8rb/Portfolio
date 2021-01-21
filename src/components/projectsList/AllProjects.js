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
    <div className="projects-container">
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
        <div className="projects-row">
          <div className="project-col">
            <Link to='/projects/pokeapp'>
              <img className="image" src={PokeAppImg} alt="project"/>
            </Link>
          </div>
          <div className="project-col">
            <Link to='/projects/bodega'>
              <img className="image" src={BodegaImg} alt="project"/>
            </Link>
          </div>
          <div className="project-col">
            <Link to='/projects/interlab'>
              <img className="image" src={InterLabImg} alt="project"/>
            </Link>
          </div>
        </div>
      </Switch>
    </div>
    </>
  );
}

export default AllProjects;