import React from 'react'
import webDeveloper from '/images/webDeveloper.png';

export default function Section1() {
    return (
        <section className='home_section1'>
            <div className="container">
                <div className="contentWrap">
                    <div className="content">
                        <h1>
                            Hi, My name is
                            <span className='nameText'>Ashwith</span>
                        </h1>
                        <p>I’m a MERN Stack developer proficient in MERN stack technologies. Building dynamic and user-friendly web applications.</p>
                        <div className="socialMediaLinks">
                            <a href="#">
                                <img src="/icons/github.png" alt="" />
                            </a>
                            <a href="#">
                                <img src="/icons/linkedin.png" alt="" />
                            </a>
                            <a href="#">
                                <img src="/icons/gmail.png" alt="" />
                            </a>
                            <a href="#">
                                <img src="/icons/instagram.png" alt="" />
                            </a>
                        </div>
                        <a href="#" className='resumeBtn'>
                            <span>View Resume</span>
                            <img src="/icons/diaganol_arrow.png" alt="" />
                        </a>
                    </div>
                    <div className="image-holder">
                        <img src={webDeveloper} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
