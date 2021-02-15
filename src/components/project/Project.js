import React from 'react';
import projectsInfo from '../../assets/json/projects.jsx';
import './Styles.scss';

const Project = ({index}) => {
  return (
    <div className="pro-container project">
      <div className="pro-row title-row">
        <div className="pro-col title-col">
          <h1 className="titleP">{projectsInfo[index].title}</h1>
        </div>
      </div>
      <div className="pro-row info-row">
        <div className="pro-col image-col">
          <a className="image-link" href={projectsInfo[index].deployed_link} target="_blank" rel="noopener noreferrer">
            <img className="imageP" src={projectsInfo[index].img} alt="project"/>
          </a>
        </div>
        <div className="pro-col info-col">
          <div className="tags-row text-col">
            {projectsInfo[index].tags.map((tag, i) =>
              <div className="tag-div" key={i}><p className="tag">{tag}</p></div>
            )}
          </div>
          <div className="desc-row">
            <p className="text">{projectsInfo[index].description}</p>
          </div>
        </div>
      </div>
      <div className="links-row">
        <div className="link-col left-col">
          <a className="btn github" href={projectsInfo[index].github_link} target="_blank" rel="noopener noreferrer">Github Repo</a>
        </div>
        <div className="link-col">
          <a className="btn live" href={projectsInfo[index].deployed_link} target="_blank" rel="noopener noreferrer">Live Site</a>
        </div>
      </div>
    </div>
  );
}

export default Project;