import React, { useState } from 'react'
import menuIcon from '/icons/burger-bar.png';
import closeIcon from '/icons/close.png';

export default function Header() {
    const [isMenuActive, setIsMenuActive] = useState(false);
    return (
        <header className='header'>
            <div className='container'>
                <div className="headWrap">
                    <div className={`navActive-bg ${isMenuActive ? "active" : ""}`}></div>
                    <nav className={`${isMenuActive ? "active" : ""}`}>
                        <div className="menuClose" onClick={() => setIsMenuActive(false)}>
                            <img src={closeIcon} alt="" />
                        </div>
                        <ul>
                            <li><a href="#section1">Home</a></li>
                            <li><a href="#section2">About</a></li>
                            <li><a href="#">Skills</a></li>
                            <li><a href="#section4">Work</a></li>
                            <li><a href="#section5">Contact</a></li>
                        </ul>
                    </nav>
                    <div className='menuIcon-holder' onClick={() => setIsMenuActive(true)}>
                        <img src={menuIcon} alt="" />
                    </div>
                </div>
            </div>
        </header>
    )
}
