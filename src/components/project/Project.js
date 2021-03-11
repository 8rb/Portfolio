import React from 'react';
import { AwesomeButton, AwesomeButtonSocial } from 'react-awesome-button';

import projectsInfo from '../../assets/json/projects.jsx';

import styles from './Project.module.scss';
import 'react-awesome-button/dist/styles.css';
import './linksBtn.scss';

const Project = ({index}) => {
  
  return (
    <>
    <div className={styles.titleWrapper}>
      <div className={styles.titleRow}>
        <h1 className={styles.title}>{projectsInfo[index].generic_name}</h1>
      </div>
    </div>
    <div className={styles.projectWrapper}>
      <div className={styles.linksRow}>
        <div className={styles.buttonGrid}>
          <AwesomeButton type="primary" href={projectsInfo[index].deployed_link}
              target="_blank" rel="noopener noreferrer">Live Site</AwesomeButton>
          <AwesomeButtonSocial type="github" href={projectsInfo[index].github_link}
              target="_blank">GitHub Repo</AwesomeButtonSocial>
        </div>
      </div>
      <div className={styles.aboutRow}>
        <div className={styles.underlineRow}>
          <h1 className={styles.subtitle}>ABOUT</h1>
        </div>
        <div className={styles.aboutInfo}>
          <p className={styles.aboutText}>{projectsInfo[index].description}</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Project;