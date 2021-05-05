import React from 'react';
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import Project from '../project/Project';
import projectsList from '../../assets/json/projects.jsx';
import styles from './Projects.module.scss';

const AllProjects = () => {
  let match = useRouteMatch();
  return (
    <>
      <div className={styles.projectsContainer}>
        <Switch>
          <Route exact path={`${match.path}/`}>
            <div className={styles.titleWrapper}>
              <div className={styles.titleRow}>
                <h1 className={styles.title}>SELECTED PROJECTS</h1>
              </div>
            </div>
            <div className={styles.projectsWrapper}>
              { projectsList.map(({generic_name: title, tags, img, id, title: name}) =>
                <div className={styles.projectRow} key={id}>
                  <div className={styles.projectInfoCol}>
                    <div className={styles.projectInfo}>
                      <div className={styles.projectTitleRow}>
                        <h1 className={styles.projectTitle}>{title}</h1>
                      </div>
                      <div className={styles.projectTagsRow}>
                        {tags.map((tags, index) =>
                          <div className={styles.tagRow} key={index}>
                            <p className={styles.tagText}>{tags}</p>
                          </div>    
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={styles.projectImageCol}>
                  <Link className={styles.imageLink} to={`projects/${name}`}>
                    <img className={styles.projectImage} src={img} alt={title}></img>
                  </Link>
                  </div>
                </div>
              )}
            </div>
          </Route>
          {projectsList.map(({id, title: name}) =>
            <Route path={`${match.path}/${name}`} key={id}>
              <Project index={id} />
            </Route>
          )}
        </Switch>
      </div>
    </>
  );
}

export default AllProjects;