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
            title="Shipper Shopper"
            description="E-commerce website built with React."
            repolink="https://github.com/mikerachman1/shopping-cart"
            livelink="https://mikerachman1.github.io/shopping-cart/"
            images={["https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg",
                      "https://www.travelandleisure.com/thmb/HlNYcpqWt9t1IgQq1eTgJG3hp6k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/saud-beach-luzon-philippines-WRLDBEACH0421-15e2c368e7ad4495be803bd60cafa379.jpg",
                      "https://a.cdn-hotels.com/gdcs/production97/d402/6baff29c-e43b-4caf-a9e8-5dcf1279dea0.jpg"
                    ]}
          />
          {/* <Project 
            title="Shipper Shopper"
            description="E-commerce website built with React."
            repolink="https://github.com/mikerachman1/shopping-cart"
            livelink="https://mikerachman1.github.io/shopping-cart/"
            images={["https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg",
                      "https://www.travelandleisure.com/thmb/HlNYcpqWt9t1IgQq1eTgJG3hp6k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/saud-beach-luzon-philippines-WRLDBEACH0421-15e2c368e7ad4495be803bd60cafa379.jpg",
                      "https://a.cdn-hotels.com/gdcs/production97/d402/6baff29c-e43b-4caf-a9e8-5dcf1279dea0.jpg"
                    ]}
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
          /> */}
        </div>
      </main>
    </div>
  );
}

export default App;
