import React from "react";
import "./Project.css"
import SlideShow from "./SlideShow";

const Project = ({ title, 
                  description,
                  repolink,
                  livelink,
                  images,
                  projectNum                    
                }) => {

  return (
    <div className="project">
      <SlideShow images={images} projectNum={projectNum} />
      <div className="project-header">
        <a href={livelink} target="_blank" rel="noreferrer">
          {title}
        </a>
        <div className="project-links">
          <a href={repolink} target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg " className="icon"  alt='github'/>
          </a>
        </div>
      </div>
      <div className="project-body">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Project;