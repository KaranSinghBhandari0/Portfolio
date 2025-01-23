import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {

    useEffect(() => {
        AOS.init({ 
            duration: 1000 
        });
    }, []);

  return (
    <div className='min-h-screen pt-16' id='about'>
        <section className="experience w-full max-w-7xl mx-auto" id="experience" data-aos="zoom-in">
            <h2 className="text-3xl mb-6 font-bold"><i className="fas fa-user text-[#ff6f61] mr-3"></i> About </h2>
            <div className="timeline">
                <div className="container right">
                    <div className="content">
                        <div className="tag">
                            <p className='font-semibold text-[#ff6f61] text-xl mb-3' >Web Development</p>
                        </div>
                        <div className="desc">
                            <h4>Started learning Web Development (MERN Stack)</h4>
                            <p>2024 - Present</p>
                        </div>
                    </div>
                </div>
                <div className="container left">
                    <div className="content">
                        <div className="tag">
                            <p className='font-semibold text-[#ff6f61] text-xl mb-3' >DSA</p>
                        </div>
                        <div className="desc">
                            <h4>Learning Data Structure and Algorithms </h4>
                            <p className='text-sm'>2022 - present</p>
                        </div>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                        <div className="tag">
                            <p className='font-semibold text-[#ff6f61] text-xl mb-3' >College</p>
                        </div>
                        <div className="desc">
                            <h4>Joined Delhi Technological University (Mathematics and Computing)</h4>
                            <p>Nov 2022 - Present</p>
                        </div>
                    </div>
                </div>
            </div>            
        </section>
    </div>
  )
}
