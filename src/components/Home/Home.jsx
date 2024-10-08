import React, { useEffect } from 'react';
import './Home.css';
import student_image from './student_image.png';
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return ( 
    <div className='Home-div' id='home'>
      <div className="home_text-wrapper">
        <p className="typing-animation">Hello, I'm <span><span>Karan</span></span></p> 
        <p className="fade-in-animation">Full Stack Developer</p>
        <br />
        <div>
          <a href='mailto:kb632126@gmail.com' className='btn btn-warning'>Hire me</a>
          <a href='https://drive.google.com/drive/u/0/folders/1ZA3txnVTHautvjyepC76FI1mrFdEARoh' className='btn btn-warning'>Resume</a>
        </div>
      </div>
      <div className='student-image-div'>
        <img src={student_image} alt="Karan - Full Stack Developer" className='student-image'/>
      </div>
    </div>
  );
}