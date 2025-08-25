import React, { useState, useEffect, useRef } from 'react';
import mail from "/icons/mail.png";
import location from "/icons/location.png";
import whiteArrow from "/icons/white_diagonal_arrow.png";

export default function Section5() {
    const [data, setData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleOnchange = (e) => {
        const {name, value} = e.target;
        setData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            console.log('form-data: ', data);
            setIsSubmitting(false);
            setData({ name: '', email: '', message: '' });
            alert('Message sent! Thanks for reaching out.');
        }, 1500);
    };

    return (
        <section className='home_section5' id='section5' ref={sectionRef}>
            <div className="container">
                <div className={`contentWrap fade-in ${isVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="glitch-effect">Contact</span> Me!
                        </h2>
                        <div className="terminal-prompt code-font">
                            <span className="prompt">{'>'}</span> 
                            <span className="command">ping ashwith@portfolio.dev</span>
                        </div>
                    </div>

                    <div className="content">
                        <div className="textContainer">
                            <div className="code-snippet">
                                <div className="code-header">
                                    <span className="dot red"></span>
                                    <span className="dot yellow"></span>
                                    <span className="dot green"></span>
                                    <span className="filename code-font">contact.js</span>
                                </div>
                                <div className="code-content code-font">
                                    <div className="code-line">
                                        <span className="comment">// Let's collaborate!</span>
                                    </div>
                                    <div className="code-line">
                                        <span className="keyword">const</span> <span className="variable">collaboration</span> = {'{'}
                                    </div>
                                    <div className="code-line indent">
                                        <span className="property">status:</span> <span className="string">"Open"</span>,
                                    </div>
                                    <div className="code-line indent">
                                        <span className="property">opportunities:</span> <span className="string">"Freelance & Full-time"</span>,
                                    </div>
                                    <div className="code-line indent">
                                        <span className="property">response_time:</span> <span className="string">{"\"< 24 hours\""}</span>
                                    </div>
                                    <div className="code-line">{'}'}</div>
                                </div>
                            </div>

                            <p className='sloganPara'>
                                Ready to bring your <span className="highlight">next project</span> to life? 
                                Let's build something <span className="highlight">amazing</span> together!
                            </p>

                            <div className="contact-methods">
                                <div className="contact-item floating" style={{animationDelay: '0s'}}>
                                    <div className="contact-icon">
                                        <img src={mail} alt="Email" />
                                    </div>
                                    <div className="contact-details">
                                        <h3>Email</h3>
                                        <p className='contact-link'>ashwithsalian2003@gmail.com</p>
                                        <div className="status-indicator">
                                            <span className="status-dot online"></span>
                                            <span className="status-text code-font">Available</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="contact-item floating" style={{animationDelay: '0.2s'}}>
                                    <div className="contact-icon">
                                        <img src={location} alt="Location" />
                                    </div>
                                    <div className="contact-details">
                                        <h3>Location</h3>
                                        <p className='contact-link'>Mangaluru, India</p>
                                        <div className="timezone code-font">
                                            UTC +5:30 (IST)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div className="form-container">
                            <div className="form-header">
                                <h3 className="code-font">
                                    <span className="prompt">{'>'}</span> Send Message
                                </h3>
                            </div>

                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="input-group">
                                    <label className="code-font">name:</label>
                                    <input 
                                        type="text" 
                                        placeholder='Your name' 
                                        name='name' 
                                        value={data.name || ''} 
                                        onChange={handleOnchange}
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="input-group">
                                    <label className="code-font">email:</label>
                                    <input 
                                        type="email" 
                                        placeholder='your.email@domain.com' 
                                        name='email' 
                                        value={data.email || ''} 
                                        onChange={handleOnchange}
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="input-group">
                                    <label className="code-font">message:</label>
                                    <textarea 
                                        placeholder='Your message...' 
                                        name='message' 
                                        value={data.message || ''} 
                                        onChange={handleOnchange}
                                        required
                                        disabled={isSubmitting}
                                        rows="5"
                                    />
                                </div>

                                <button 
                                    type='submit' 
                                    disabled={isSubmitting}
                                    className={`submit-btn dev-hover ${isSubmitting ? 'loading' : ''}`}
                                >
                                    <span className="btn-content">
                                        <span className="code-font prompt">{'>'}</span>
                                        {isSubmitting ? 'Sending...' : 'Execute Send'}
                                        {!isSubmitting && <img src={whiteArrow} alt="Arrow" />}
                                        {isSubmitting && <span className="loading-spinner"></span>}
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="footer-note">
                        <div className="terminal-signature code-font">
                            <span className="prompt">$</span>
                            <span className="command">echo "Thanks for visiting! 🚀"</span>
                        </div>
                        <p className="copyright">
                            &copy; {new Date().getFullYear()} Ashwith Salian. Built with ❤️ and lots of ☕
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
