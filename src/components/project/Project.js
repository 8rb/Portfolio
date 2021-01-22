import React from 'react';
import projectsInfo from '../../json/projects';
import './Styles.scss';

const Project = ({index}) => {
  return (
    <div className="pro-container">
      <div className="pro-row">
        <div className="pro-col image-col">
          <img className="imageP" src={projectsInfo[index].img} alt="project"/>
        </div>
        <div className="pro-col">
          <div className="title-row">
            <h1 className="titleP">{projectsInfo[index].title}</h1>
          </div>
          <div className="tags-row">
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