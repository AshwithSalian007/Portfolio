import React from 'react';
import reactImg from "/images/skills/react.svg";
import mongo from "/images/skills/mongodb.svg";
import javascript from "/images/skills/javascript.svg";
import nodejs from "/images/skills/nodejs.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CustomLeftArrow = ({ onClick }) => (
    <button className="custom-arrow custom-arrow--left" onClick={onClick}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M5 12H19M5 12L11 6M5 12L11 18" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
        </svg>
    </button>
);

const CustomRightArrow = ({ onClick }) => (
    <button className="custom-arrow custom-arrow--right" onClick={onClick}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M5 12H19M13 6L19 12L13 18" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
        </svg>
    </button>
);


export default function Section3() {
    const skills = [
        {
            icon: reactImg,
            name: "React",
            category: "Frontend"
        },
        {
            icon: javascript,
            name: "JavaScript",
            category: "Language"
        },
        {
            icon: nodejs,
            name: "Node.js",
            category: "Backend"
        },
        {
            icon: mongo,
            name: "MongoDB",
            category: "Database"
        }
    ];

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
            slidesToSlide: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1200 },
            items: 4,
            slidesToSlide: 2
        },
        laptop: {
            breakpoint: { max: 1199, min: 768 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 767, min: 480 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 479, min: 0 },
            items: 2,
            slidesToSlide: 1
        }
    };
    
    return (
        <section className="home_section3" id="section3">
            <div className="container">
                <div className="skillsWrapper">
                    <h2>My <span>Skills</span></h2>
                    <div className="skillContainer">
                        <Carousel 
                            responsive={responsive} 
                            infinite 
                            autoPlay 
                            autoPlaySpeed={4000}
                            showDots={true}
                            arrows={true}
                            swipeable={true}
                            draggable={true}
                            shouldResetAutoplay={true}
                            pauseOnHover={true}
                            keyBoardControl={true}
                            customTransition="all 0.5s ease"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            itemClass="carousel-item-padding"
                            dotListClass="custom-dot-list"
                            customLeftArrow={<CustomLeftArrow />}
                            customRightArrow={<CustomRightArrow />}
                        >
                            {skills.map((skill, index) => (
                                <div className="skillCard" key={index}>
                                    <div className="skillIcon">
                                        <img src={skill.icon} alt={skill.name} />
                                    </div>
                                    <div className="skillInfo">
                                        <h3>{skill.name}</h3>
                                        <p>{skill.category}</p>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
}
