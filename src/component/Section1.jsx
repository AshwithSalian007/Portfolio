import React, { useState, useEffect } from 'react';
import webDeveloper from '/images/webDeveloper.svg';
import gitHub from "/icons/github.png";
import linkedIn from "/icons/linkedin.png";
import gmail from "/icons/gmail.png";
import insta from "/icons/instagram.png";
import diaArrow from "/icons/diaganol_arrow.png";

export default function Section1() {
    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    const roles = [
        'MERN Stack Developer',
        'Full Stack Engineer', 
        'React Developer',
        'Node.js Developer',
        'Problem Solver'
    ];

    useEffect(() => {
        const currentRoleText = roles[currentRole];
        let currentIndex = 0;
        
        if (isTyping) {
            const typingTimer = setInterval(() => {
                if (currentIndex <= currentRoleText.length) {
                    setDisplayText(currentRoleText.slice(0, currentIndex));
                    currentIndex++;
                } else {
                    setIsTyping(false);
                    clearInterval(typingTimer);
                    setTimeout(() => {
                        setIsTyping(true);
                        setCurrentRole((prev) => (prev + 1) % roles.length);
                    }, 2000);
                }
            }, 100);

            return () => clearInterval(typingTimer);
        }
    }, [currentRole, isTyping]);

    return (
        <section className='home_section1' id='section1'>
            <div className="container">
                <div className="contentWrap fade-in">
                    <div className="content">
                        <h1>
                            <span className="greeting-text">Hi, I'm</span>
                            <span className='nameText glitch-effect'>Ashwith</span>
                        </h1>
                        
                        <div className="role-container">
                            <span className="role-prefix code-font">{'> '}</span>
                            <span className="role-text code-font">{displayText}</span>
                            <span className="cursor-blink">|</span>
                        </div>
                        
                        <p className="dev-description">
                            Crafting digital experiences with the <span className="highlight">MERN stack</span>. 
                            I transform ideas into <span className="highlight">dynamic web applications</span> that users love.
                        </p>
                        
                        <div className="terminal-snippet">
                            <div className="terminal-header">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                            </div>
                            <div className="terminal-body code-font">
                                <div className="terminal-line">
                                    <span className="prompt">$</span>
                                    <span className="command">npm install creativity passion</span>
                                </div>
                                <div className="terminal-line">
                                    <span className="output">✓ Ready to build amazing things!</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="socialMediaLinks">
                            <a href="https://github.com/AshwithSalian007" target="_blank" rel="noopener noreferrer" 
                               className="social-link floating" style={{animationDelay: '0s'}}>
                                <img src={gitHub} alt="GitHub" />
                                <span className="social-tooltip">GitHub</span>
                            </a>
                            <a href="https://www.linkedin.com/in/ashwithsalian" target="_blank" rel="noopener noreferrer" 
                               className="social-link floating" style={{animationDelay: '0.2s'}}>
                                <img src={linkedIn} alt="LinkedIn" />
                                <span className="social-tooltip">LinkedIn</span>
                            </a>
                            <a href="mailto:ashwithsalian@gmail.com" 
                               className="social-link floating" style={{animationDelay: '0.4s'}}>
                                <img src={gmail} alt="Email" />
                                <span className="social-tooltip">Email</span>
                            </a>
                            <a href="#" className="social-link floating" style={{animationDelay: '0.6s'}}>
                                <img src={insta} alt="Instagram" />
                                <span className="social-tooltip">Instagram</span>
                            </a>
                        </div>
                        
                        <a className='resumeBtn pulse-animation dev-hover' 
                           href="/Portfolio/resume/ashwith.pdf" 
                           target="_blank" 
                           rel="noopener noreferrer">
                            <span>View Resume</span>
                            <img src={diaArrow} alt="Arrow" />
                        </a>
                    </div>
                    <div className="image-holder floating">
                        <img src={webDeveloper} alt="Web Developer" />
                    </div>
                </div>
            </div>
        </section>
    );
}
