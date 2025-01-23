import React, { useState, useEffect, useRef } from "react";

export default function Navbar() {
    const [drawer, setDrawer] = useState(false);
    const drawerRef = useRef(null);

    // Close drawer on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target)) {
                setDrawer(false);
            }
        };

        if (drawer) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [drawer]);

    return (
        <header className="w-full shadow-lg fixed top-0 bg-white z-30">
            <nav className="w-full h-16 max-w-7xl mx-auto flex justify-between items-center px-4">
                <p className="text-2xl text-[#D84CAC] font-bold myName">&lt; Karan /&gt;</p>
                <div className="hidden md:flex gap-6">
                    <a
                        href="#home"
                        className="px-2 p-1 rounded-2xl font-semibold hover:bg-purple-500 hover:text-white transition-all duration-[0.7s] ease-in-out"
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="px-2 p-1 rounded-2xl font-semibold hover:bg-purple-500 hover:text-white transition-all duration-[0.7s] ease-in-out"
                    >
                        About
                    </a>
                    <a
                        href="#skills"
                        className="px-2 p-1 rounded-2xl font-semibold hover:bg-purple-500 hover:text-white transition-all duration-[0.7s] ease-in-out"
                    >
                        Skills
                    </a>
                    <a
                        href="#projects"
                        className="px-2 p-1 rounded-2xl font-semibold hover:bg-purple-500 hover:text-white transition-all duration-[0.7s] ease-in-out"
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-2 p-1 rounded-2xl font-semibold hover:bg-purple-500 hover:text-white transition-all duration-[0.7s] ease-in-out"
                    >
                        Contact
                    </a>
                </div>
                <i
                    className="md:hidden fa-solid fa-bars text-lg cursor-pointer"
                    onClick={() => setDrawer(!drawer)}
                ></i>
            </nav>

            <div
                ref={drawerRef}
                className={`h-screen w-48 bg-slate-100 fixed top-0 flex flex-col gap-4 items-center pt-12 px-4 text-center shadow-lg z-1000 transition-transform duration-500 ease-in-out ${
                    drawer ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <a
                    href="#home"
                    className="w-full py-2 rounded-2xl font-semibold hover:bg-purple-500 hover:text-white transition-all duration-[0.7s] ease-in-out"
                    onClick={() => setDrawer(false)}
                >
                    Home
                </a>
                <a
                    href="#about"
                    className="w-full py-2 rounded-2xl font-semibold hover:bg-purple-500 hover:text-white transition-all duration-[0.7s] ease-in-out"
                    onClick={() => setDrawer(false)}
                >
                    About
                </a>
                <a
                    href="#skills"
                    className="w-full py-2 rounded-2xl font-semibold hover:bg-purple-500 hover:text-white transition-all duration-[0.7s] ease-in-out"
                    onClick={() => setDrawer(false)}
                >
                    Skills
                </a>
                <a
                    href="#projects"
                    className="w-full py-2 rounded-2xl font-semibold hover:bg-purple-500 hover:text-white transition-all duration-[0.7s] ease-in-out"
                    onClick={() => setDrawer(false)}
                >
                    Projects
                </a>
                <a
                    href="#contact"
                    className="w-full py-2 rounded-2xl font-semibold hover:bg-purple-500 hover:text-white transition-all duration-[0.7s] ease-in-out"
                    onClick={() => setDrawer(false)}
                >
                    Contact
                </a>
            </div>
        </header>
    );
}
