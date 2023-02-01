import React from 'react';
import Project from './Project';
import './App.css';
import sofie from './images/sofie-and-me.png'

function App() {
  return (
    <div className='App'>
      <header>
        <div className='sun-container'>
          <div className='sun'></div>
        </div>
        <h1>Mike Rachman</h1>
        <h3>Software Engineer <br></br>Specializing in Front-End Development</h3>
      </header>
      <div className='about-me'>
        <img className='dog-pic' src={sofie} alt="my-dog-and-me" />
        <h1>About Me</h1>
        <p className='about-text'>Having a degree in Design and Fabrication, building things has always been a passion of mine.<br></br>
          I create dynamic and intuitive applications with clean designs.</p>
      </div>
      <main>
        <h1>Projects</h1>
        <div className='projects-container'>
          <Project 
            title="Shipper Shopper"
            description="E-commerce website built with React."
            repolink="https://github.com/mikerachman1/shopping-cart"
            livelink="https://mikerachman1.github.io/shopping-cart/"
            images={["https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg",
                      "https://www.travelandleisure.com/thmb/HlNYcpqWt9t1IgQq1eTgJG3hp6k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/saud-beach-luzon-philippines-WRLDBEACH0421-15e2c368e7ad4495be803bd60cafa379.jpg",
                      "https://a.cdn-hotels.com/gdcs/production97/d402/6baff29c-e43b-4caf-a9e8-5dcf1279dea0.jpg"
                    ]}
            projectNum={1}
          />
          <Project 
            title="Shipper Shopper"
            description="E-commerce website built with React."
            repolink="https://github.com/mikerachman1/shopping-cart"
            livelink="https://mikerachman1.github.io/shopping-cart/"
            images={["https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg",
                      "https://www.travelandleisure.com/thmb/HlNYcpqWt9t1IgQq1eTgJG3hp6k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/saud-beach-luzon-philippines-WRLDBEACH0421-15e2c368e7ad4495be803bd60cafa379.jpg",
                      "https://a.cdn-hotels.com/gdcs/production97/d402/6baff29c-e43b-4caf-a9e8-5dcf1279dea0.jpg"
                    ]}
            projectNum={2}
          />
          <Project 
            title="Shipper Shopper"
            description="E-commerce website built with React."
            repolink="https://github.com/mikerachman1/shopping-cart"
            livelink="https://mikerachman1.github.io/shopping-cart/"
            images={["https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg",
                      "https://www.travelandleisure.com/thmb/HlNYcpqWt9t1IgQq1eTgJG3hp6k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/saud-beach-luzon-philippines-WRLDBEACH0421-15e2c368e7ad4495be803bd60cafa379.jpg",
                      "https://a.cdn-hotels.com/gdcs/production97/d402/6baff29c-e43b-4caf-a9e8-5dcf1279dea0.jpg"
                    ]}
            projectNum={3}
          />
          <Project 
            title="Shipper Shopper"
            description="E-commerce website built with React."
            repolink="https://github.com/mikerachman1/shopping-cart"
            livelink="https://mikerachman1.github.io/shopping-cart/"
            images={["https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg",
                      "https://www.travelandleisure.com/thmb/HlNYcpqWt9t1IgQq1eTgJG3hp6k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/saud-beach-luzon-philippines-WRLDBEACH0421-15e2c368e7ad4495be803bd60cafa379.jpg",
                      "https://a.cdn-hotels.com/gdcs/production97/d402/6baff29c-e43b-4caf-a9e8-5dcf1279dea0.jpg"
                    ]}
            projectNum={4}
          />
          <Project 
            title="Shipper Shopper"
            description="E-commerce website built with React."
            repolink="https://github.com/mikerachman1/shopping-cart"
            livelink="https://mikerachman1.github.io/shopping-cart/"
            images={["https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg",
                      "https://www.travelandleisure.com/thmb/HlNYcpqWt9t1IgQq1eTgJG3hp6k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/saud-beach-luzon-philippines-WRLDBEACH0421-15e2c368e7ad4495be803bd60cafa379.jpg",
                      "https://a.cdn-hotels.com/gdcs/production97/d402/6baff29c-e43b-4caf-a9e8-5dcf1279dea0.jpg"
                    ]}
            projectNum={5}
          />
          <Project 
            title="Shipper Shopper"
            description="E-commerce website built with React."
            repolink="https://github.com/mikerachman1/shopping-cart"
            livelink="https://mikerachman1.github.io/shopping-cart/"
            images={["https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg",
                      "https://www.travelandleisure.com/thmb/HlNYcpqWt9t1IgQq1eTgJG3hp6k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/saud-beach-luzon-philippines-WRLDBEACH0421-15e2c368e7ad4495be803bd60cafa379.jpg",
                      "https://a.cdn-hotels.com/gdcs/production97/d402/6baff29c-e43b-4caf-a9e8-5dcf1279dea0.jpg"
                    ]}
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
