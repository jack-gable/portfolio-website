import { Link } from "gatsby";
import React from "react";
import { StyledHeader, Nav, Logo, NavList } from "./styles/Navbar.styled";
import { ButtonLink } from "./styles/Button.styled";
import styled from "styled-components";

export const StyledLink = styled((props) => <Link {...props} />)`
	color: var(--color-dark-gray);
	font-weight: 600;
	font-size: 1.8rem;
	text-decoration: none;

	&:hover {
		color: var(--color-primary-blue);
		text-decoration: underline;
	}

	&:focus {
		padding: 2px;
	}
`;

export const LogoLink = styled((props) => <Link {...props} />)`
	text-decoration: none;
`;

export default function Navbar() {
	return (
		<StyledHeader>
			<LogoLink to="/">
				<Logo>JG</Logo>
			</LogoLink>
			<Nav>
				<NavList>
					<li>
						<ButtonLink href="/#about">About</ButtonLink>
					</li>
					<li>
						<ButtonLink href="/#projects">Projects</ButtonLink>
					</li>
					<li>
						<StyledLink to="/contact">Contact</StyledLink>
					</li>
				</NavList>
			</Nav>
		</StyledHeader>
	);
}
