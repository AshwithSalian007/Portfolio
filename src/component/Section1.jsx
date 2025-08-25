import React from 'react'
import webDeveloper from '/images/webDeveloper.svg';
import gitHub from "/icons/github.png"
import linkedIn from "/icons/linkedin.png"
import gmail from "/icons/gmail.png"
import insta from "/icons/instagram.png"
import diaArrow from "/icons/diaganol_arrow.png"


export default function Section1() {
    return (
        <section className='home_section1' id='section1'>
            <div className="container">
                <div className="contentWrap">
                    <div className="content">
                        <h1>
                            Hi, My name is
                            <span className='nameText'>Ashwith</span>
                        </h1>
                        <p>I’m a MERN Stack developer proficient in MERN stack technologies. Building dynamic and user-friendly web applications.</p>
                        <div className="socialMediaLinks">
                            <a href="https://github.com/AshwithSalian007" target="_blank" rel="noopener noreferrer">
                                <img src={gitHub} alt="" />
                            </a>
                            <a href="https://www.linkedin.com/in/ashwithsalian" target="_blank" rel="noopener noreferrer">
                                <img src={linkedIn} alt="" />
                            </a>
                            <a href="#">
                                <img src={gmail} alt="" />
                            </a>
                            <a href="#">
                                <img src={insta} alt="" />
                            </a>
                        </div>
                        <a className='resumeBtn' href="/Portfolio/resume/ashwith.pdf" target="_blank" rel="noopener noreferrer">
                            <span>View Resume</span>
                            <img src={diaArrow} alt="" />
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
