import styled from "styled-components";

export const Content = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 10rem;
`;

export const ContentTitle = styled.h3`
	font-weight: 700;
	font-size: 2.8rem;
	margin-bottom: 3rem;
	color: var(--color-dark-blue);
`;

export const AboutText = styled.p`
	font-size: 1.8rem;
	color: var(--color-dark-gray);
	max-width: 60rem;
	line-height: 1.7;
	margin-bottom: 4rem;
`;

export const Skills = styled.div`
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`;

export const Skill = styled.div`
	padding: 1rem 2rem;
	margin-bottom: 1.5rem;
	margin-right: 1.5rem;
	font-size: 1.6rem;
	background-color: var(--color-light-blue);
	border-radius: 5px;
	font-weight: 600;
	color: var(--color-dark-gray);
	display: flex;
	justify-content: center;
	align-items: center;
`;
