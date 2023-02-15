import React from 'react';
import Project from './Project';
import './App.css';

import sofie from './images/sofie-and-me.png';
import ss1 from './images/screenshots/shipper-shopper/ss1.png';
import ss2 from './images/screenshots/shipper-shopper/ss2.png';
import ss3 from './images/screenshots/shipper-shopper/ss3.png';
import dc1 from './images/screenshots/memory-card/dc1.png';
import dc2 from './images/screenshots/memory-card/dc2.png';
import dc3 from './images/screenshots/memory-card/dc3.png';
import bs1 from './images/screenshots/battlship/bs1.png';
import bs2 from './images/screenshots/battlship/bs2.png';
import bs3 from './images/screenshots/battlship/bs3.png';
import ml1 from './images/screenshots/my-library/ml1.png';
import ml2 from './images/screenshots/my-library/ml2.png';
import ml3 from './images/screenshots/my-library/ml3.png';
import td1 from './images/screenshots/todo/td1.png';
import td2 from './images/screenshots/todo/td2.png';
import td3 from './images/screenshots/todo/td3.png';
import rs1 from './images/screenshots/rockstagram/rs1.png';
import rs2 from './images/screenshots/rockstagram/rs2.png';
import rs3 from './images/screenshots/rockstagram/rs3.png';


function App() {
  return (
    <div className='App'>
      <header>
        <h1>Mike Rachman</h1>
        <h3>Software Engineer <br></br>Specializing in Front-End Development</h3>
      </header>
      <div className='about-me'>
        <img className='dog-pic' src={sofie} alt="my-dog-and-me" />
        <h1>About Me</h1>
        <h5 className='mobile-notice'>Tap here!</h5>
        <p className='about-text'>Having a degree in Design and Fabrication, building things has always been a passion of mine.<br></br>
          I create dynamic and intuitive applications with clean designs.</p>
      </div>
      <main>
        <h1>Projects</h1>
        <div className='projects-container'>
          <Project 
            title="Rockstagram"
            description="A photo sharing app for rock climbers."
            repolink="https://github.com/mikerachman1/rockstagram"
            livelink="https://rockstagram-9e421.web.app/"
            images={[rs1, rs2, rs3]}
            projectNum={1}
          />
          <Project 
            title="Shipper Shopper"
            description="E-commerce website built with React."
            repolink="https://github.com/mikerachman1/shopping-cart"
            livelink="https://mikerachman1.github.io/shopping-cart/"
            images={[ss1, ss2, ss3]}
            projectNum={2}
          />
          <Project 
            title="Flag Memory Game"
            description="Game built with React."
            repolink="https://github.com/mikerachman1/memory-card"
            livelink="https://mikerachman1.github.io/memory-card/"
            images={[dc1, dc2, dc3]}
            projectNum={3}
          />
          <Project 
            title="Battleship"
            description="A classic game of battleship played against a simple AI."
            repolink="https://github.com/mikerachman1/battleship"
            livelink="https://battleship-3a66c.web.app/"
            images={[bs1, bs2, bs3]}
            projectNum={4}
          />
          <Project 
            title="My Library"
            description="React app for keeping track of books read and books to read"
            repolink="https://github.com/mikerachman1/react-library"
            livelink="https://library-60e1f.web.app/"
            images={[ml1, ml2, ml3]}
            projectNum={5}
          />
          <Project 
            title="ToDo!"
            description="Todo list that allows the user to organize their todo lists into seperate 'Projects'."
            repolink="https://github.com/mikerachman1/todo-js"
            livelink="https://todo1-ed178.web.app/"
            images={[td1, td2, td3]}
            projectNum={6}
          />
        </div>
      </main>
      <footer>
        <h1>Contact Me</h1>
        <p>mikerachman1@gmail.com</p>
        <p>(484)-226-7432</p>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/michael-rachman-551148237/" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" className="icon" alt='linkedin'/>
          </a>
          <a href="https://github.com/mikerachman1" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg " className="icon"  alt='github'/>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
