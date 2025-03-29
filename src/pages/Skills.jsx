import React from 'react';

export default function Skills() {

    const techStack = [
        { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Zustand", img: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg" },
        { name: "TailwindCSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "SQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }, // Using MySQL icon for SQL
        { name: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "C++", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Vercel", img: "https://www.svgrepo.com/show/327408/logo-vercel.svg" },
        { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Postman", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" }
    ];

    return (
        <div className='bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] min-h-screen pt-16 ' id='skills'>
            <div className='max-w-7xl mx-auto p-4' data-aos="zoom-in">
                <div className='flex gap-4 justify-center mb-16'>
                    <i className="fa-solid fa-laptop text-3xl text-white"></i>
                    <p className='text-3xl font-bold text-white'>Skills &
                        <span className='text-[#FFE600]'> Abilities</span>
                    </p>
                </div>

                <div className='w-full max-w-2xl grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] gap-x-6 gap-y-8 mx-auto'>
                    {techStack.map((tech, i) => (
                        <div key={i} className="w-20 h-20 bg-gradient-to-br from-[#1e1e1e] to-[#2a2a2a] rounded-lg shadow-lg flex justify-center items-center 
                    hover:rounded-[50%] hover:scale-110 hover:shadow-[0px_0px_15px_#00ffff] transition-all duration-500 ease-in-out">
                            <img src={tech.img} alt={tech.name} className="w-12 h-12 transition-all duration-500 ease-in-out hover:scale-125" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
