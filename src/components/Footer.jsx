import React from 'react';

export default function Footer() {
  return (
    <div className='bg-[#00012B]'>
        <div className='w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-8 text-center'>
            <div className='flex flex-col sm:flex-row sm:justify-around items-center gap-6 border-b border-gray-500 mb-6 pb-6'>
            <div className='flex flex-wrap justify-center gap-4'>
                <a
                    href='https://github.com/KaranSinghBhandari0'
                    className='flex justify-center items-center h-10 w-10 rounded-full border border-gray-400 cursor-pointer hover:bg-purple-500 transition-all ease-in-out duration-500 transform hover:translate-y-[-5px] shadow-lg' >
                    <i className={`fa-brands fa-github text-white text-xl`}></i>
                </a>
                <a
                    href='https://www.linkedin.com/in/karan-bhandari-8a39aa248/'
                    className='flex justify-center items-center h-10 w-10 rounded-full border border-gray-400 cursor-pointer hover:bg-purple-500 transition-all ease-in-out duration-500 transform hover:translate-y-[-5px] shadow-lg' >
                    <i className={`fa-brands fa-linkedin text-white text-xl`}></i>
                </a>
                <a
                    href='https://www.facebook.com/profile.php?id=100069638135018'
                    className='flex justify-center items-center h-10 w-10 rounded-full border border-gray-400 cursor-pointer hover:bg-purple-500 transition-all ease-in-out duration-500 transform hover:translate-y-[-5px] shadow-lg' >
                    <i className={`fa-brands fa-facebook text-white text-xl`}></i>
                </a>
                <a
                    href='https://x.com/Karan1213830'
                    className='flex justify-center items-center h-10 w-10 rounded-full border border-gray-400 cursor-pointer hover:bg-purple-500 transition-all ease-in-out duration-500 transform hover:translate-y-[-5px] shadow-lg' >
                    <i className={`fa-brands fa-twitter text-white text-xl`}></i>
                </a>
            </div>
            <div className='text-center md:text-start'>
                <p className='text-white text-2xl font-semibold mb-2'>Contact Info</p>
                <p className='text-white flex items-center justify-center md:justify-start mb-1'>
                    <i className='fa-solid fa-phone mr-3 text-green-500'></i> 
                    +91 9990715135
                </p>
                <p className='text-white flex items-center justify-center md:justify-start'>
                    <i className='fa-solid fa-envelope mr-3 text-orange-600'></i> 
                    kb632126@gmail.com
                </p>
            </div>
            </div>

            <p className='text-white text-sm md:text-base flex items-center justify-center'>
                Designed With
                <i className='fa-solid fa-heart mx-2 text-red-700 animate-pulse'></i>
                By Karan
            </p>
        </div>
    </div>
  );
}
