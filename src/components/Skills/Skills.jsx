import React, { useEffect } from 'react';
import './Skills.css'
import skills from './skills.jpg'
import htmlLogo from './logos/html.png'
import cssLogo from './logos/css.png'
import jsLogo from './logos/js.png'
import bootstrapLogo from './logos/bootstrap.png'
import reactLogo from './logos/react.png'
import nodeLogo from './logos/node.png'
import expressLogo from './logos/express.png'
import dbLogo from './logos/db.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="skills-div" id='skills'>
      <br /><br />
      <h1>Skills</h1>
      <div className="skills-div-content" data-aos="flip-left">
        <img src={skills} alt="" className='skills-image' />
        <div className='all-skills'>
        <div className="skill-image">
          <img src={htmlLogo} alt="HTML Logo" />
          <p className="hover-text">HTML</p>
        </div>
          <div className="skill-image">
            <img src={cssLogo} alt="" />
            <p className="hover-text">CSS</p>
          </div>
          <div className="skill-image">
            <img src={jsLogo} alt="" />
            <p className="hover-text">JavaScript</p>
          </div>
          <div className="skill-image">
            <img src={bootstrapLogo} alt="" />
            <p className="hover-text">Bootstrap</p>
          </div>
          <div className="skill-image">
            <img src={reactLogo} alt="" />
            <p className="hover-text">React</p>
          </div>
          <div className="skill-image">
            <img src={nodeLogo} alt="" />
            <p className="hover-text">Node.js</p>
          </div>
          <div className="skill-image">
            <img src={expressLogo} alt="" />
            <p className="hover-text">Express.js</p>
          </div>
          <div className="skill-image">
            <img src={dbLogo} alt="" />
            <p className="hover-text">MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  )
}
