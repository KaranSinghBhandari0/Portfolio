import React, { useEffect } from 'react'
import SkillCard from '../components/SkillCard'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Skills() {
    
    useEffect(() => {
        AOS.init({ 
            duration: 1000 
        });
    }, []);

  return (
    <div className='bg-[#5303AD] min-h-screen pt-16' id='skills'>
        <div className='max-w-7xl mx-auto p-4' data-aos="zoom-in">
            <div className='flex gap-4 justify-center'>
                <i className="fa-solid fa-laptop text-3xl text-white"></i>
                <p className='text-3xl font-bold text-white'>Skills & 
                    <span className='text-[#FFE600]'> Abilities</span>
                </p>
            </div>

            <div className='max-w-6xl mx-auto mt-8 rounded-lg bg-[#33026E] grid grid-cols-3 md:grid-cols-4 gap-6 p-4'>
                <SkillCard skill={"HTML"} />
                <SkillCard skill={"CSS"} />
                <SkillCard skill={"JavaScript"} />
                <SkillCard skill={"Node.js"} />
                <SkillCard skill={"Express.js"} />
                <SkillCard skill={"Mongo DB"} />
                <SkillCard skill={"React"} />
                <SkillCard skill={"Tailwind"} />
                <SkillCard skill={"Bootstrap"} />
                <SkillCard skill={"Git"} />
                <SkillCard skill={"Java"} />
                <SkillCard skill={"C++"} />
            </div>
        </div>
    </div>
  )
}
