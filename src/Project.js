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
        <h2>{title}</h2>
        <div className="project-links">
          <a href={repolink} target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg " class="icon"  alt='github'/>
          </a>
          <a href={livelink} target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/8584/8584964.png" class="icon" alt="live-app" />
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