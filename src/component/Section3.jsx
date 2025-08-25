import React from 'react'
import reactImg from "/images/skills/react.svg";
import mongo from "/images/skills/mongodb.svg";
import javascript from "/images/skills/javascript.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default function Section3() {
    const skills = [
        {
            icon: reactImg,
        },
        {
            icon: mongo,
        },
        {
            icon: javascript,
        },
        {
            icon: javascript,
        },
        {
            icon: reactImg,
        },
        {
            icon: mongo,
        },
        {
            icon: javascript,
        },
        {
            icon: javascript,
        },
    ]

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="home_section3" id='section3'>
            <div className="container">
                <div className="skillContainer">
                    <Carousel responsive={responsive} infinite autoPlay>
                        {skills.map((skill, index) => (
                            <div className="innerContainer" key={index}>
                                <img src={skill.icon} alt={`skill-${index}`} />
                            </div>
                        ))}
                    </Carousel>

                </div>
            </div>
        </section>
    )
}
