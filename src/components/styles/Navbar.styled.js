import styled from "styled-components";

export const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: end;
	padding: 1rem 2rem;
	position: fixed;
	width: 100%;
	z-index: 10;
	background-color: var(--color-white);
	box-shadow: 0 10px 100px rgba(0, 0, 0, 0.1);
	opacity: 0.95;
`;

export const Logo = styled.div`
	font-size: 4rem;
	border: 2px solid #202020;
	color: var(--color-dark-blue);
	padding: 0 0.8rem;
	font-weight: 700;
	text-align: center;
	font-family: "Raleway", sans-serif;
`;

export const Nav = styled.nav`
	font-size: 1.4rem;
`;

export const NavList = styled.ul`
	list-style: none;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	gap: 3rem;
	margin: 0;
	padding: 0;
	padding-right: 1.5rem;
`;
