import React from "react";
import SlideShow from "./SlideShow";

const Project = ({ title, 
                  description,
                  repolink,
                  livelink,
                  images                    
                }) => {

  return (
    <div className="project">
      <SlideShow images={images} />
      <div className="project-header">
        <h2>{title}</h2>
        <div className="project-links">
          <a href={repolink} target="_blank" rel="noreferrer">GitHub</a>
          <a href={livelink} target="_blank" rel="noreferrer">VisitApp</a>
        </div>
      </div>
      <div className="project-body">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Project;