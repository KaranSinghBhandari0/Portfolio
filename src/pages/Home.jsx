import React from 'react';

export default function Home() {
  return (
    <div className="bg-[#e5ecfb] min-h-screen pt-20" id="home">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 p-6 md:p-12">
        
            {/* Left Section - Text Content */}
            <div className="w-full max-w-[600px]">
                <p className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight typing-animation">
                    Hello, I am 
                    <span className="text-red-500 "> Karan</span>
                </p>
                <br />
                <br />
                <p className="text-[1.4rem] sm:text-2xl md:text-3xl font-semibold text-[#0866FF] animate-pulse">
                    Full Stack Web Developer
                </p>
                <br />
                <p className="text-gray-600 md:text-lg leading-relaxed">
                    With a strong foundation in both front-end and back-end technologies, I enjoy creating dynamic and user-friendly applications. 
                    I'm looking for my first opportunity in the tech industry to apply my skills to real-world projects.
                </p>
                <br />

                {/* Buttons Section */}
                <div className="flex justify-center md:justify-start gap-6 mt-4">
                    <a href="/Resume.pdf" download="resume.pdf" className="py-3 px-6 text-white bg-black rounded-lg hover:opacity-80 transition-all duration-300 shadow-lg text-lg">
                        Resume <i className="fa-solid fa-arrow-down ml-2"></i>
                    </a>
                    <a href="mailto:kb632126@gmail.com" className="py-3 px-6 text-white bg-black rounded-lg hover:opacity-80 transition-all duration-300 shadow-lg text-lg">
                        Hire me <i className="fa-solid fa-file-signature ml-2"></i>
                    </a>
                </div>
            </div>

            {/* Right Section - Image */}
            <div className="w-full flex justify-center">
                <img 
                    src="/studentImg.png" 
                    alt="Karan's profile" 
                    className="max-w-[300px] sm:max-w-[400px] md:max-w-[450px] w-full drop-shadow-lg rounded-lg"
                />
            </div>

        </div>
    </div>
  );
}
