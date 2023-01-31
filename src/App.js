import React from 'react';
import Project from './Project';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header>
        <h1>Mike Rachman</h1>
        <h3>Software Engineer specializing in Front-End Development</h3>
      </header>
      <div className='about-me'>
        <h1>About Me</h1>
        <p>Having a degree in Design and Fabrication, building things has always been a passion of mine.</p>
        <p>I create dynamic and intuitive applications with clean designs.</p>
      </div>
      <main>
        <h1>Projects</h1>
        <div className='projects-container'>
          <Project 
            title=""
            description=""
            repolink=""
            livelink=""
            images=""
          />
        </div>
      </main>
    </div>
  );
}

export default App;
