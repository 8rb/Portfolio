import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  Link
} from "react-router-dom";
import Project from '../project/Project';
import PokeAppImg from '../../assets/images/PokeApp.jpg';
import BodegaImg from '../../assets/images/Bodega.jpg';
import InterlabImg from '../../assets/images/InterLab.jpg'
import './Styles.scss';

const AllProjects = () => {
  let match = useRouteMatch();
  return (
    <>
      <div className="projects-container projects">
        <Switch>
          <Route path={`${match.path}/pokeapp`}>
            <Project index={0} />
          </Route>
          <Route path={`${match.path}/bodega`}>
            <Project index={1} />
          </Route>
          <Route path={`${match.path}/interlab`}>
            <Project index={2} />
          </Route>
          <Route exact path={`${match.path}/`}>
            <div className="projects-row">
              <div className="projects-col">
                <h1 className="title">Projects</h1>
              </div>
            </div>
            <div className="projects-row">
              <div className="project-col">
                <div className="img-container">
                  <Link to='/projects/pokeapp'>
                    <img className="image" src={PokeAppImg} alt="project" />
                    <div className="overlay">
                      <div className="overlay-text">Pokemon Search</div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="project-col">
                <div className="img-container">
                  <Link to='/projects/bodega'>
                    <img className="image" src={BodegaImg} alt="project" />
                    <div className="overlay">
                      <div className="overlay-text">E-Shop</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="projects-row">
              <div className="project-col">
                <div className="img-container">
                  <Link to='/projects/interlab'>
                    <img className="image" src={InterlabImg} alt="project" />
                    <div className="overlay">
                      <div className="overlay-text">Internship Finder</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default AllProjects;