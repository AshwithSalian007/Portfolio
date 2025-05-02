import React from 'react'
import study from "/images/study.png"

export default function Section2() {
    return (
        <section className="home_section2">
            <div className="container">
                <div className="contentWrap">
                    <div className="image-holder">
                        <img src={study} alt="" />
                    </div>
                    <div className="content">
                        <h2>
                            About <span>Me</span>
                        </h2>
                        <p>
                            "I'm a passionate <span>MERN stack developer </span>specializing in building scalable and user-friendly web applications.  From dynamic front-end interfaces to robust back-end solutions, I craft seamless user experiences using React, Node.js, Express, and MongoDB. I'm always eager to learn and explore new technologies.”
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
