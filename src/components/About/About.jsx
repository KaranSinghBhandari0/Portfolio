import React, { useEffect } from 'react';
import './About.css'
import aboutMe from './about-me.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="about-container-parent" id='about'>
      <div className="about-container" data-aos="zoom-in">
        <img src={aboutMe} alt="" className='about-me-image' />
        <div className='about-me'>
          <h1>About Me</h1>
          <p>Hello everyone! My name is Karan Singh Bhandari, and I’m currently pursuing my B.Tech from Delhi Technological University. I am in my 3rd year of engineering and have developed a passion for web development. With a strong foundation in both front-end and back-end technologies, I enjoy creating dynamic and user-friendly applications. I'm now looking for my first opportunity in the tech industry to kickstart my career and apply my skills in real-world projects.</p>
        </div>
      </div>
    </div>
  )
}
