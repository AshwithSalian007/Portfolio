import React, { useState } from 'react';
import '../styles/_footer.scss';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate email submission
        setTimeout(() => {
            setEmail('');
            setIsSubmitting(false);
            alert('Thanks for reaching out! I\'ll get back to you soon.');
        }, 1000);
    };

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/AshwithSalian007',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
            )
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/ashwithsalian',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            )
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/ashwithsalian',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
            )
        },
        {
            name: 'Email',
            url: 'mailto:ashwithsalian@example.com',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0124 5.457z"/>
                </svg>
            )
        }
    ];

    return (
        <footer className="footer">
            <div className="footer-background">
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
            </div>
            
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section contact-section">
                        <h3>Let's Connect</h3>
                        <p>Ready to bring your ideas to life? Let's chat!</p>
                        
                        <form onSubmit={handleEmailSubmit} className="contact-form">
                            <div className="input-group">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your.email@domain.com"
                                    required
                                    disabled={isSubmitting}
                                />
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting || !email}
                                    className={isSubmitting ? 'loading' : ''}
                                >
                                    {isSubmitting ? (
                                        <span className="loading-spinner"></span>
                                    ) : (
                                        'Send'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="footer-section social-section">
                        <h3>Follow Me</h3>
                        <div className="social-links">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    title={link.name}
                                >
                                    {link.icon}
                                    <span className="social-name">{link.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer-section quick-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#section1">Home</a></li>
                            <li><a href="#section2">About</a></li>
                            <li><a href="#section3">Skills</a></li>
                            <li><a href="#projects">Projects</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="terminal-signature">
                        <span className="prompt">{'>'}</span>
                        <span className="command">console.log("Made with ❤️ by Ashwith Salian")</span>
                        <span className="cursor">|</span>
                    </div>
                    
                    <div className="copyright">
                        <p>&copy; {new Date().getFullYear()} Ashwith Salian. All rights reserved.</p>
                        <p className="fun-text">Powered by coffee ☕ and code 💻</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;