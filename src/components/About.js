import React from "react";
import { Container } from "./styles/Container.styled";
import { SectionHeading, SubSectionHeading } from "./styles/Text.styled";
import {
	Content,
	ContentTitle,
	AboutText,
	Skill,
	Skills,
} from "./styles/About.styled";
import { Link } from "gatsby";
import styled from "styled-components";

export const StyledLink = styled((props) => <Link {...props} />)`
	background: var(--color-primary-blue);
	color: var(--color-dark-gray);
	text-transform: uppercase;
	letter-spacing: 2px;
	display: inline-block;
	cursor: pointer;
	font-weight: 700;
	border-radius: 5px;
	box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
	transition: transform 0.3s;
	padding: 1.5rem 2rem;
	font-size: 1.6rem;
	text-decoration: none;
	text-align: center;
	width: 75%;
	margin: 0 auto;

	&:hover {
		transform: translateY(-3px);
		background: var(--color-light-blue);
	}
`;

export default function About() {
	return (
		<section id="about" style={{ padding: "6rem 0" }}>
			<Container>
				<div>
					<SectionHeading marginBtm="9rem">
						<SectionHeading>About Me</SectionHeading>
						<SubSectionHeading>
							<p>
								I'm a frontend developer based out of the San Francisco Bay
								Area. I love building apps that are user-friendly and accessible
								to all. My specialities include JavaScript, React JS, Styled
								Components and Tailwind CSS.
							</p>
						</SubSectionHeading>
					</SectionHeading>
				</div>
				<Content>
					<div>
						<ContentTitle>Get to Know Me!</ContentTitle>
						<AboutText>
							My background is in biology and computer science. I have a BSc in
							Biology and a minor in CS from Sonoma State University. When I'm
							not coding, I like to play basketball with my friends and workout.
						</AboutText>
						<StyledLink to="/contact">Contact Me</StyledLink>
					</div>
					<div>
						<ContentTitle>My Skills</ContentTitle>
						<Skills>
							<Skill>HTML</Skill>
							<Skill>CSS</Skill>
							<Skill>JavaScript</Skill>
							<Skill>React</Skill>
							<Skill>Git</Skill>
							<Skill>Styled Components</Skill>
							<Skill>Tailwind CSS</Skill>
							<Skill>Jasmine</Skill>
							<Skill>JSON</Skill>
						</Skills>
					</div>
				</Content>
			</Container>
		</section>
	);
}
