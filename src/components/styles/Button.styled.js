import styled from "styled-components";

export const ButtonLink = styled.a`
	color: var(--color-dark-gray);
	font-weight: 600;
	font-size: 1.8rem;
	text-decoration: none;

	&:hover {
		color: var(--color-primary-blue);
		transform: translateY(-3px);
		text-decoration: underline;
	}

	&:focus {
		padding: 2px;
	}
`;

export const StyledButton = styled.a`
	background: var(--color-primary-blue);
	color: var(--color-dark-gray);
	text-transform: uppercase;
	letter-spacing: 2px;
	display: inline-block;
	font-weight: 700;
	border-radius: 5px;
	box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
	transition: transform 0.3s;
	padding: 1.5rem 5rem;
	font-size: 1.6rem;
	text-decoration: none;
	text-align: center;

	&:hover {
		background-color: var(--color-light-blue);
		transform: translateY(-3px);
	}

	&:focus {
		border: 2px solid var(--color-dark-gray);
	}
`;
