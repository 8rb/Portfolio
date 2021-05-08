import React from 'react';
import Button from '../button/Button';
import SocialButton from '../button/Social';
import projectsInfo from '../../assets/json/projects.jsx';
import styles from './Project.module.scss';

type Props = {
  index: number,
}

const Project: React.FC<Props> = ({index}) => {
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
          <Button type="primary" href={projectsInfo[index].deployed_link} target="_blank" text="Live Site"/>
          <SocialButton type="github" href={projectsInfo[index].github_link} target="_blank" text="GitHub Repo"/>
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