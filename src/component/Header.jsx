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
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Skills</a></li>
                            <li><a href="#">Work</a></li>
                            <li><a href="#">Contact</a></li>
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
