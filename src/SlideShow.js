import React, { useEffect, useState } from "react";
import "./SlideShow.css";

const SlideShow =({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pastSlide, setPastSlide] = useState(0);

  const changeSlide = (moveTo) => {
    if (moveTo > 2) { moveTo = 0 }
    if (moveTo < 0) { moveTo = 2 }
    setPastSlide(currentSlide);
    setCurrentSlide(moveTo);
  };

  useEffect(() => {
    const slides = document.getElementsByClassName('slider-slide');
    const navlinks = document.getElementsByClassName('slider-dot');
    slides[pastSlide].classList.toggle("active");
    slides[currentSlide].classList.toggle("active");
    navlinks[pastSlide].classList.toggle("active");
    navlinks[currentSlide].classList.toggle("active");
  }, [currentSlide, pastSlide])

  return (
    <div className="slider">
      <div className="slider-slides">
        <div className="slider-slide active">
          <img src={images[0]} alt="project-pic-1"/>
        </div>
        <div className="slider-slide">
          <img src={images[1]} alt="project-pic-2"/>
        </div>
        <div className="slider-slide">
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
          <div className="slider-dot active"
              onClick={() => changeSlide(0)}></div>
          <div className="slider-dot"
              onClick={() => changeSlide(1)}></div>
          <div className="slider-dot"
              onClick={() => changeSlide(2)}></div>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;