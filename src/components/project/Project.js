import React from 'react';
import projectsInfo from '../../assets/json/projects.jsx';
import styles from './Project.module.scss';

const Project = ({index}) => {
  
  return (
    <>
    <div className={styles.titleWrapper}>
      <div className={styles.titleRow}>
        <h1 className={styles.title}>{projectsInfo[index].generic_name}</h1>
      </div>
    </div>
    <div className={styles.projectWrapper}>
      {/* <div className={styles.imageRow}>
        <img className={styles.image} src={projectsInfo[index].img} alt={projectsInfo[index].generic_name}/>
      </div> */}
      <div className={styles.aboutRow}>
        {/* <div className={styles.underlineRow}>
          <h1 className={styles.subtitle}>ABOUT</h1>
        </div> */}
        <div className={styles.aboutInfo}>
          <p className={styles.aboutText}>{projectsInfo[index].description}</p>
        </div>
      </div>
      <div className={styles.linksRow}>
        <div className={styles.underlineRow}>
          <h1 className={styles.subtitle}>LINKS</h1>
        </div>
        <div className={styles.buttonsGrid}>
          <a className={styles.githubBtn} href={projectsInfo[index].github_link} target="_blank" rel="noopener noreferrer">Github Repo</a>
          <a className={styles.siteBtn} href={projectsInfo[index].deployed_link} target="_blank" rel="noopener noreferrer">Live Site</a>
        </div>
       </div>
    </div>
    </>
  );
}

export default Project;