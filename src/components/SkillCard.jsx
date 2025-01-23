import React from 'react';

export default function SkillCard({ skill }) {
  return (

    <div className='bg-[#05001F] rounded-lg text-center hover:shadow-lg hover:shadow-[#05000B] py-4'>
        <img src={`/${skill}.png`} alt="" className='w-8 h-8 sm:w-12 sm:h-12 mx-auto' />
        <p className="mt-2 text-white font-semibold">{skill}</p>
    </div>
  );
}
