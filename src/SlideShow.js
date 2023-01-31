/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./SlideShow.css";

const SlideShow =({ images, projectNum }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pastSlide, setPastSlide] = useState(0);

  const changeSlide = (moveTo) => {
    if (moveTo > 2) { moveTo = 0 }
    if (moveTo < 0) { moveTo = 2 }
    setPastSlide(currentSlide);
    setCurrentSlide(moveTo);
  };

  useEffect(() => {
    const slides = document.getElementsByClassName(`slider-slide${projectNum}`);
    const navlinks = document.getElementsByClassName(`slider-dot${projectNum}`);
    slides[pastSlide].classList.toggle("active");
    slides[currentSlide].classList.toggle("active");
    navlinks[pastSlide].classList.toggle("active");
    navlinks[currentSlide].classList.toggle("active");
  }, [currentSlide, pastSlide])

  return (
    <div className="slider project-pic">
      <div className="slider-slides">
        <div className={`slider-slide${projectNum} active`}>
          <img src={images[0]} alt="project-pic-1"/>
        </div>
        <div className={`slider-slide${projectNum}`}>
          <img src={images[1]} alt="project-pic-2"/>
        </div>
        <div className={`slider-slide${projectNum}`}>
          <img src={images[2]} alt="project-pic-3"/>
        </div>
        <div id="nav-button-prev" 
            className="nav-button"
            onClick={() => changeSlide(currentSlide - 1)}
            ></div>
        <div id="nav-button-next" 
            className="nav-button"
            onClick={() => changeSlide(currentSlide + 1)}
            ></div>
        <div className="slider-dots">
          <div className={`slider-dot${projectNum} active`}
              onClick={() => changeSlide(0)}></div>
          <div className={`slider-dot${projectNum}`}
              onClick={() => changeSlide(1)}></div>
          <div className={`slider-dot${projectNum}`}
              onClick={() => changeSlide(2)}></div>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;