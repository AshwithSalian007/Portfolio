import React, { useState, useEffect, useRef } from 'react';
import socio from "/images/projects/sociog.png";
import pet from "/images/projects/pet.png";
import mole from "/images/projects/mario-bg.jpg";
import collapse from "/icons/collapse.png";
import expand from "/icons/expand.png";

const projectList = [
	{
		title: "Socio-G",
		img: socio,
		description: "A high-performance cross-platform social app built with React Native, Expo, and Express, featuring real-time interactions, smooth navigation, and customizable user experiences.",
		techStack: ["Expo","Axios","Express.js", "MongoDB", "JWT"],
		link: "https://github.com/AshwithSalian007/Socio-G",
		status: "Full Stack",
		year: "2024"
	},
	{
		title: "Pet-Planet",
		img: pet,
		description: "A web application that allows users to securely list and buy pets, with features like user authentication, protected routes, and real-time updates for pet listings and transactions.",
		techStack: ["React", "Express.js", "MongoDB", "JWT","Axios"],
		link: "https://github.com/AshwithSalian007/Pet-Planet",
		status: "MERN Stack",
		year: "2023"
	},
	{
		title: "Whack-a-Mole",
		img: mole,
		description: "A fun and interactive \"Whack-a-Mole\" game where players click on moles that pop up randomly to score points within a time limit.",
		techStack: ["HTML", "CSS", "Javascript"],
		link: "https://github.com/AshwithSalian007/web-game/tree/main/whack_a_mole",
		status: "Frontend",
		year: "2023"
	}
];

export default function Section4() {
	const [isSeeMoreActive, setIsSeeMoreActive] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [hoveredCard, setHoveredCard] = useState(null);
	const sectionRef = useRef(null);

	const displayProjects = isSeeMoreActive ? projectList : projectList.slice(0, 3);

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

	return (
		<section className='home_section4' id='section4' ref={sectionRef}>
			<div className="container">
				<div className={`outer_container fade-in ${isVisible ? 'visible' : ''}`}>
					<div className="section-header">
						<h2 className="section-title">
							<span className="glitch-effect">My</span> Works
						</h2>
						<div className="terminal-prompt code-font">
							<span className="prompt">{'>'}</span> 
							<span className="command">git log --oneline --graph</span>
						</div>
					</div>

					<div className="card_container">
						{displayProjects.map((project, index) => (
							<div
								key={index}
								className={`project_card ${project.link ? "clickable" : ""} ${hoveredCard === index ? "hovered" : ""}`}
								onClick={() => {
									if (project.link) {
										window.open(project.link, "_blank");
									}
								}}
								onMouseEnter={() => setHoveredCard(index)}
								onMouseLeave={() => setHoveredCard(null)}
								style={{animationDelay: `${index * 0.1}s`}}
							>
								<div className="project-header">
									<div className="project-status">
										<span className="status-badge">{project.status}</span>
										<span className="year-badge">{project.year}</span>
									</div>
									<div className="project-icon code-font">
										{'{ }'}
									</div>
								</div>

								<div className="image-holder">
									<img src={project.img} alt={project.title} />
									<div className="image-overlay">
										<div className="overlay-content">
											<span className="view-code code-font">
												&lt;/&gt; View Code
											</span>
										</div>
									</div>
								</div>

								<div className="project-content">
									<h3>{project.title}</h3>
									<p>{project.description}</p>

									<div className="terminal-stack">
										<div className="terminal-line code-font">
											<span className="prompt">$</span>
											<span className="command">npm list --depth=0</span>
										</div>
									</div>

									<div className='textStackContainer'>
										{project.techStack && project.techStack.map((tech, techIndex) => (
											<div key={techIndex} className="tech-chip">
												{tech}
											</div>
										))}
									</div>
								</div>

								<div className="project-footer">
									<div className="commit-info code-font">
										<span className="commit-hash">#a7b2c3d</span>
										<span className="commit-message">Latest commit</span>
									</div>
								</div>
							</div>
						))}
					</div>

					<div className="projects-actions">
						<button 
							className="action-btn dev-hover pulse-animation" 
							onClick={() => setIsSeeMoreActive(!isSeeMoreActive)}
						>
							<span className="btn-content">
								<span className="code-font prompt">{'>'}</span>
								{isSeeMoreActive ? "Show Less" : "Load More Projects"}
								<img src={isSeeMoreActive ? collapse : expand} alt="" />
							</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}