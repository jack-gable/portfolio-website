import React from "react";
import {
	ProjectRow,
	RowContent,
	RowDesc,
	RowImage,
	RowTitle,
} from "./styles/Projects.styled";
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

export default function Project({ image, alt, desc, title, link }) {
	return (
		<ProjectRow>
			<RowImage>
				<img src={image} alt={alt} style={{ borderRadius: 10 }} />
			</RowImage>
			<RowContent>
				<RowTitle>{title}</RowTitle>
				<RowDesc>{desc}</RowDesc>
				<StyledLink to={link}>View Live Version</StyledLink>
			</RowContent>
		</ProjectRow>
	);
}
