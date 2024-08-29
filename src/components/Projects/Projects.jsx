import React, { useState,useEffect } from 'react';
import './Projects.css';
import AOS from 'aos';
import eCommerce from './e-commerce.jpg'
import recipe from './recipe.jpg'

export default function Projects() {
  const [showWork, setShowWork] = useState(false);

  const handleSeeMoreClick = () => {
    setShowWork(!showWork);
  };

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div id="portfolio">
      <div className="container" data-aos="zoom-in">
        <h1 className="sub-title">My Work</h1>
        <div className="work-list">
          <div className="work" id="work1">
            <img src={recipe} alt="Work 1" style={{maxWidth:'300px'}} />
            <div className="layer">
              <h3>Mom's Kitchen</h3>
              <p>A recipe website made using react and food API. The application uses an External API to fetch the food recipe.</p>
              <a href="https://recipe-website-react.vercel.app/"><i className="fa-solid fa-up-right-from-square"></i></a>
            </div>
          </div>
          
          {showWork && (
            <div className="work" id="work2">
              <img src="https://s01.holidaybest.com/get/83/f6/c5/5198ddc2ba222c88fe779672776274bbd5b26a820cfa3c19813935916d/BookNow_1_Inst_1080x1080+(1).png" alt="Work 2" style={{maxWidth:'300px'}} />
              <div className="layer">
                <h3>TravelTide</h3>
                <p>A end to end web application that provides users to book, add holiday sites online. This platform allows users to effortlessly browse, book, and review holiday destinations</p>
                <a href="https://travel-tide-git-main-karansinghbhandari0s-projects.vercel.app/listings"><i className="fa-solid fa-up-right-from-square"></i></a>
              </div>
            </div>
          )}

          {showWork && (
            <div className="work" id="work3">
              <img src={eCommerce} alt="Work 3" style={{maxWidth:'300px'}} />
              <div className="layer">
                <h3>E-commerce</h3>
                <p>Web application, built with the MERN stack, for purchasing PC components. This platform offers a user-friendly interface for customers to browse and buy a variety of PC hardware, while administrators have the ability to manage and add new components to the inventory.</p>
                <a href="https://www.amazon.in/"><i className="fa-solid fa-up-right-from-square"></i></a>
              </div>
            </div>
          )}
        </div>
        
        {!showWork && 
          <button type="button" className="btn btn-outline see-more-btn" onClick={handleSeeMoreClick}>
            See more
          </button>
        }
        {showWork && 
          <button type="button" className="btn btn-outline see-more-btn" onClick={handleSeeMoreClick}>
            See less
          </button>
        }
      </div>
    </div>
  );
}
