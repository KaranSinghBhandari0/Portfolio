import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [show, setShow] = useState(false);

    const handleToggle = () => setShow(!show);
    const handleClose = () => setShow(false);

    return (
        <div className="nav-parent">
            <nav> 
                <a href="" className="fa-solid fa-user-tie logo"></a>
                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#portfolio">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
                <i 
                    type="button" 
                    onClick={handleToggle} 
                    className="fa-solid fa-bars menu-icon"
                    aria-controls="offcanvasWithBothOptions" 
                    aria-label="Toggle navigation"
                ></i>

                <div 
                    className={`offcanvas offcanvas-start ${show ? 'show' : ''}`} 
                    tabIndex="-1" 
                    id="offcanvasWithBothOptions" 
                    aria-labelledby="offcanvasWithBothOptionsLabel"
                >
                    <div className="offcanvas-header">
                        <i 
                            className="fa-solid fa-xmark" 
                            onClick={handleClose} 
                            aria-label="Close"
                        ></i>
                    </div>
                    <div className="offcanvas-body">
                        <a href="#home" onClick={handleClose}>Home</a>
                        <a href="#about" onClick={handleClose}>About</a>
                        <a href="#skills" onClick={handleClose}>Skills</a>
                        <a href="#portfolio" onClick={handleClose}>Projects</a>
                        <a href="#contact" onClick={handleClose}>Contact</a>
                    </div>
                </div>

            </nav>
        </div>
    );
}