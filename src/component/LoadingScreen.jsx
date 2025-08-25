import React, { useState, useEffect } from 'react';
import '../styles/_loading.scss';

const LoadingScreen = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    
    const loadingTexts = [
        'Initializing...',
        'Loading portfolio data...',
        'Compiling skills...',
        'Rendering projects...',
        'Optimizing experience...',
        'Ready!'
    ];

    useEffect(() => {
        const progressTimer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressTimer);
                    setTimeout(() => onLoadingComplete(), 500);
                    return 100;
                }
                return prev + 2;
            });
        }, 50);

        return () => clearInterval(progressTimer);
    }, [onLoadingComplete]);

    useEffect(() => {
        const textIndex = Math.floor((progress / 100) * (loadingTexts.length - 1));
        const targetText = loadingTexts[textIndex] || loadingTexts[0];
        
        let currentLength = 0;
        const typingTimer = setInterval(() => {
            if (currentLength <= targetText.length) {
                setCurrentText(targetText.slice(0, currentLength));
                currentLength++;
            } else {
                clearInterval(typingTimer);
            }
        }, 50);

        return () => clearInterval(typingTimer);
    }, [progress]);

    useEffect(() => {
        const cursorTimer = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 530);

        return () => clearInterval(cursorTimer);
    }, []);

    return (
        <div className="loading-screen">
            <div className="loading-container">
                <div className="terminal-window">
                    <div className="terminal-header">
                        <div className="terminal-controls">
                            <span className="control close"></span>
                            <span className="control minimize"></span>
                            <span className="control maximize"></span>
                        </div>
                        <div className="terminal-title">portfolio.exe</div>
                    </div>
                    
                    <div className="terminal-content">
                        <div className="ascii-art">
                            <pre>
{`    ____            __  ____      ___      
   / __ \\___  _____/ /_/ __/___  / (_)___   
  / /_/ / _ \\/ ___/ __/ /_/ __ \\/ / / __ \\  
 / ____/  __/ /  / /_/ __/ /_/ / / / /_/ /  
/_/    \\___/_/   \\__/_/  \\____/_/_/\\____/   `}
                            </pre>
                        </div>
                        
                        <div className="loading-text">
                            <span className="prompt">{'>'}</span>
                            <span className="text">{currentText}</span>
                            <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
                        </div>
                        
                        <div className="progress-container">
                            <div className="progress-bar">
                                <div 
                                    className="progress-fill" 
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                            <div className="progress-text">{progress}%</div>
                        </div>
                        
                        <div className="loading-dots">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;