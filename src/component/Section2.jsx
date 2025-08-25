import React, { useState, useEffect, useRef } from 'react';
import study from "/images/study.svg";

export default function Section2() {
    const [isVisible, setIsVisible] = useState(false);
    const [stats, setStats] = useState({ projects: 0, experience: 0, technologies: 0 });
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    animateStats();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    const animateStats = () => {
        const duration = 2000;
        const intervals = 50;
        const step = duration / intervals;
        
        const targets = { projects: 15, experience: 2, technologies: 10 };
        let current = { projects: 0, experience: 0, technologies: 0 };
        
        const timer = setInterval(() => {
            current.projects = Math.min(current.projects + targets.projects / intervals, targets.projects);
            current.experience = Math.min(current.experience + targets.experience / intervals, targets.experience);
            current.technologies = Math.min(current.technologies + targets.technologies / intervals, targets.technologies);
            
            setStats({
                projects: Math.floor(current.projects),
                experience: Math.floor(current.experience * 10) / 10,
                technologies: Math.floor(current.technologies)
            });
            
            if (current.projects >= targets.projects && 
                current.experience >= targets.experience && 
                current.technologies >= targets.technologies) {
                clearInterval(timer);
            }
        }, step);
    };

    return (
        <section className="home_section2" id="section2" ref={sectionRef}>
            <div className="container">
                <div className={`contentWrap fade-in ${isVisible ? 'visible' : ''}`}>
                    <div className="image-holder floating">
                        <img src={study} alt="About Me" />
                    </div>
                    <div className="content">
                        <h2 className="section-title">
                            About <span className="glitch-effect">Me</span>
                        </h2>
                        
                        <div className="code-block">
                            <div className="code-header">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                                <span className="filename code-font">about-me.js</span>
                            </div>
                            <div className="code-content code-font">
                                <div className="code-line">
                                    <span className="comment">// Developer Profile</span>
                                </div>
                                <div className="code-line">
                                    <span className="keyword">const</span> <span className="variable">developer</span> = {'{'}
                                </div>
                                <div className="code-line indent">
                                    <span className="property">name:</span> <span className="string">"Ashwith Salian"</span>,
                                </div>
                                <div className="code-line indent">
                                    <span className="property">role:</span> <span className="string">"MERN Stack Developer"</span>,
                                </div>
                                <div className="code-line indent">
                                    <span className="property">passion:</span> <span className="string">"Building Amazing Web Apps"</span>,
                                </div>
                                <div className="code-line indent">
                                    <span className="property">stack:</span> [<span className="string">"React"</span>, <span className="string">"Node.js"</span>, <span className="string">"MongoDB"</span>]
                                </div>
                                <div className="code-line">{'}'}</div>
                            </div>
                        </div>
                        
                        <p className="dev-description">
                            I'm a passionate <span className="highlight">MERN stack developer</span> who transforms ideas into 
                            digital reality. I specialize in building <span className="highlight">scalable web applications</span> 
                            with seamless user experiences, combining creativity with clean, efficient code.
                        </p>
                        
                        <div className="stats-container">
                            <div className="stat-item">
                                <div className="stat-number">{stats.projects}+</div>
                                <div className="stat-label">Projects</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">{stats.experience}+</div>
                                <div className="stat-label">Years Experience</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">{stats.technologies}+</div>
                                <div className="stat-label">Technologies</div>
                            </div>
                        </div>

                        <div className="tech-stack">
                            <h3 className="code-font">
                                <span className="prompt">{'>'}</span> Tech Stack
                            </h3>
                            <div className="tech-icons">
                                <span className="tech-badge">React</span>
                                <span className="tech-badge">Node.js</span>
                                <span className="tech-badge">MongoDB</span>
                                <span className="tech-badge">Express</span>
                                <span className="tech-badge">JavaScript</span>
                                <span className="tech-badge">TypeScript</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
