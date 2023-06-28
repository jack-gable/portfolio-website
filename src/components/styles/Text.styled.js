import styled from "styled-components";

export const PrimaryText = styled.p`
	color: var(--color-dark-gray);
	font-size: 2.2rem;
	text-align: center;
	width: 100%;
	line-height: 1.6;
`;

export const PrimaryHeading = styled.h1`
	font-size: 6rem;
	text-transform: uppercase;
	letter-spacing: 3px;
	text-align: center;
	color: var(--color-dark-blue);
`;

export const SectionHeading = styled.span`
	display: block;
	font-size: 4rem;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 1px;
	letter-spacing: 3px;
	text-align: center;
	padding-top: 1rem;
	margin-bottom: ${({ marginBtm }) => marginBtm || "3.5rem"};
	position: relative;
	color: ${({ color }) => color || "var(--color-dark-blue)"};
`;

export const SubSectionHeading = styled.span`
	display: block;
	text-align: center;
	color: var(--color-dark-gray);
	font-size: 2rem;
	font-weight: 500;
	max-width: 80rem;
	margin: auto;
	line-height: 1.6;
`;
