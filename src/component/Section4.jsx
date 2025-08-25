import React, { useState } from 'react';
import socio from "/images/projects/sociog.png";
import pet from "/images/projects/pet.png";
import mole from "/images/projects/mario-bg.jpg";
import collapse from "/icons/collapse.png"
import expand from "/icons/expand.png"


const projectList = [
	{
		title: "Socio-G",
		img: socio,
		description: "A high-performance cross-platform social app built with React Native, Expo, and Express, featuring real-time interactions, smooth navigation, and customizable user experiences.",
		techStack: ["Expo","Axios","Express.js", "MongoDB", "JWT"],
		link: "https://github.com/AshwithSalian007/Socio-G"
	},
	{
		title: "Pet-Planet",
		img: pet,
		description: "A web application that allows users to securely list and buy pets, with features like user authentication, protected routes, and real-time updates for pet listings and transactions.",
		techStack: ["React", "Express.js", "MongoDB", "JWT ","Axios"],
		link: "https://github.com/AshwithSalian007/Pet-Planet"
	},
	{
		title: "Whack-a-Mole",
		img: mole,
		description: "A fun and interactive \"Whack-a-Mole\" game where players click on moles that pop up randomly to score points within a time limit.",
		techStack: ["HTML", "CSS", "Javascript"],
		link: "https://github.com/AshwithSalian007/web-game/tree/main/whack_a_mole"
	}
]

export default function Section4() {
	const [isSeeMoreActive, setIsSeeMoreActive] = useState(false);

	const displayProjects = isSeeMoreActive ? projectList : projectList.slice(0, 3);

	return (
		<section className='home_section4' id='section4'>
			<div className="container">
				<div className="outer_container">
					<h2>
						 <span>My </span>Works
					</h2>
					<div className="card_container">
						{
							displayProjects.map((project, index) => (
								<div
									key={index}
									className={`project_card ${project.link ? "clickable" : ""}`}
									onClick={() => {
										if (project.link) {
											window.open(project.link, "_blank");
										}
									}}
								>
									<div className="image-holder">
										<img src={project.img} alt={project.title} />
									</div>
									<h3>{project.title}</h3>
									<p>{project.description}</p>
									<div className='textStackContainer'>
										{project.techStack && project.techStack.map((tech, index) => (
											<div key={index}>{tech}</div>
										))}
									</div>
								</div>
							))
						}
					</div>
					<div>
						{
							isSeeMoreActive ?
								<button onClick={() => { setIsSeeMoreActive(false) }}>See less <img src={collapse} alt="" /></button>
								:
								<button onClick={() => { setIsSeeMoreActive(true) }}>See all <img src={expand} alt="" /></button>
						}
					</div>

				</div>

			</div>
		</section>
	)
}