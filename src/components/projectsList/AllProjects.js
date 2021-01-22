import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  Link
} from "react-router-dom";
import PokeAppImg from '../../assets/PokeApp.jpg';
import Project from '../project/Project';
import BodegaImg from '../../assets/Bodega.jpg';
import './Styles.scss';

const AllProjects = () => {
  let match = useRouteMatch();
  return (
    <>
      <div className="projects-container">
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
            {/* <div className="title-row">
              <div className="title-col">
                <h1 className="title">Projects</h1>
              </div>
            </div> */}
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
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default AllProjects;