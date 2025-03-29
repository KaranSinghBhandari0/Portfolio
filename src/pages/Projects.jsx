import React, { useState, useEffect, useRef } from "react";

export default function Projects() {
    const [activeIndex, setActiveIndex] = useState(1);
    const sliderRef = useRef(null);

    const projects = [
        {
            title: "eMart",
            description: "This eCommerce platform is a fully-featured online store designed to offer users a smooth and efficient shopping experience. Built with the powerful MERN stack (MongoDB, Express.js, React, and Node.js), this platform provides a dynamic, responsive, and secure environment for both customers and admins to interact with products, manage orders, and track transactions.",
            imgSrc: "/eMart.jpg",
            github: "https://github.com/KaranSinghBhandari0/eMart",
            liveDemo: "https://emart-by-karan.vercel.app/",
        },
        {
            title: "Chatify",
            description: "Chatify is a real-time chat application where users can add friends and chat with them. The application uses React for frontend and Express Node.js for backend and MongoDB for database. It also allow users to update or forgot password option. The app allows users to enjoy a smooth and interactive chat experience. The application is fully responsive",
            imgSrc: "/chatify.webp",
            github: "https://github.com/KaranSinghBhandari0/Chatify",
            liveDemo: "https://chatify-by-karan.vercel.app/",
        },
        {
            title: "Prescripto",
            description: "Prescripto is a web application which solves the queue system in hospitals. This application is made using MERN stack. Users can login and book appointments with doctors. There is a seprate doctor dashboard for doctor appointments. The admin can add or remove new doctor change availabilty of doctor.",
            imgSrc: "/prescripto.jpg",
            github: "https://github.com/KaranSinghBhandari0/Prescripto",
            liveDemo: "https://prescripto-by-karan.vercel.app/",
        },
        {
            title: "TravelTide",
            description: "TravelTide is a comprehensive and user-friendly vacation rental platform designed to connect travelers with hosts offering unique places to stay. Built using the MERN stack (MongoDB, Express.js, React, Node.js), TravelTide brings the ease and flexibility of booking vacation homes, apartments, and other accommodations right to your fingertips, much like Airbnb.",
            imgSrc: "/Traveltide.webp",
            github: "https://github.com/KaranSinghBhandari0/TravelTide",
            liveDemo: "https://travel-tide.vercel.app/",
        },
    ];

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    useEffect(() => {
        const items = sliderRef.current.querySelectorAll(".item");
        items.forEach((item, index) => {
            item.classList.remove("active", "left", "right");
            if (index === activeIndex) {
                item.classList.add("active");
            } else if (index === (activeIndex - 1 + items.length) % items.length) {
                item.classList.add("left");
            } else if (index === (activeIndex + 1) % items.length) {
                item.classList.add("right");
            }
        });
    }, [activeIndex]);

    return (
        <div className="min-h-screen pt-16 w-full " id="projects">
            <div className="w-full max-w-7xl mx-auto p-4 text-center">
                <p className="text-3xl font-bold">
                    Academic
                    <span className="text-green-500"> Projects </span>
                </p>

                <div className="main-container mt-16 w-full">
                    <div className="slider-container relative">
                        <div className="slider" ref={sliderRef}>
                            {projects.map((project, index) => (
                                <div
                                    className={`card item ${index === activeIndex ? "active" : ""}`}
                                    key={index}
                                >
                                    <img src={project.imgSrc} alt={project.title} />
                                    <div className="card-body">
                                        <p className="text-lg font-bold">
                                            {project.title}
                                        </p>
                                        <p className="card-text">{project.description}</p>
                                        <div className="card-links flex justify-between px-4">
                                            <a href={project.liveDemo} className="bg-green-500 py-1 px-2 rounded-lg text-white transition-all duration-300 ease-in-out hover:bg-green-600 hover:scale-105 hover:shadow-lg">
                                                <i className="fa-solid fa-link mr-2"></i>
                                                Visit
                                            </a>
                                            <a href={project.github} className="bg-green-500 py-1 px-2 rounded-lg text-white transition-all duration-300 ease-in-out hover:bg-green-600 hover:scale-105 hover:shadow-lg">
                                                <i className="fa-brands fa-github mr-2"></i>
                                                Github
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Prev and Next buttons */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 px-12"
                        >
                            <i className="fa-solid fa-arrow-left text-white text-2xl"></i>
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 px-12"
                        >
                            <i className="fa-solid fa-arrow-right text-white text-2xl" ></i>
                        </button>
                    </div>
                </div>
                <div className="flex justify-center mt-6 gap-12 lg:hidden">
                    <i className="fa-solid fa-arrow-left text-white text-2xl" onClick={handlePrev}></i>
                    <i className="fa-solid fa-arrow-right text-white text-2xl" onClick={handleNext}></i>
                </div>
            </div>
        </div>
    );
}
