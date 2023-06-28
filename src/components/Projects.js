import React from "react";
import { Container } from "./styles/Container.styled";
import { SectionHeading, SubSectionHeading } from "./styles/Text.styled";
import Project from "./Project";
import googleKeep from "../../public/assets/img/notes-app-1.png";
import movieSearch from "../../public/assets/img/movie-search-1.png";

const projects = [
	{
		title: "Google Keep Clone",
		desc: "A small version of the Google Keep notes app. It's built with functional React components and styled components.",
		image: googleKeep,
		alt: "google keep clone",
		link: "",
	},
	{
		title: "Movie Search App",
		desc: "Movie Search is a simple movie lookup site that allows the user to find his/her favorite movies. It's built with functional React components.",
		image: movieSearch,
		alt: "movie search app",
		link: "",
	},
	{
		title: "Google Keep Clone",
		desc: "A small version of the Google Keep notes app. It's built with functional React components and styled components.",
		image: "",
		alt: "",
		link: "",
	},
];

export default function Projects() {
	return (
		<section
			id="projects"
			style={{ padding: "6rem 0", backgroundColor: "var(--color-light-gray)" }}
		>
			<Container>
				<div>
					<SectionHeading marginBtm="9rem">
						<SectionHeading>Projects</SectionHeading>
						<SubSectionHeading>
							<p>
								All my projects include links to the code and live version.
								Click the button to learn more about each one.
							</p>
						</SubSectionHeading>
					</SectionHeading>
				</div>
				<div>
					{projects.map(({ title, desc, image, alt, link }) => (
						<Project
							title={title}
							desc={desc}
							image={image}
							alt={alt}
							link={link}
						/>
					))}
				</div>
			</Container>
		</section>
	);
}
