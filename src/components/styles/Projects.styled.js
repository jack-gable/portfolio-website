import styled from "styled-components";

export const RowContent = styled.div`
	padding: 2rem 0;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: flex-start;
`;

export const ProjectRow = styled.div`
	display: grid;
	grid-template-columns: 1.5fr 1fr;
	grid-gap: 5rem;
	padding: 5rem 0;
`;

export const RowImage = styled.div`
	width: 100%;
	display: block;
	object-fit: cover;
	border-radius: 10px;
	max-width: 500px;
`;

export const RowTitle = styled.h3`
	font-weight: 700;
	font-size: 2.8rem;
	margin-bottom: 2rem;
	color: var(--color-dark-gray);
`;

export const RowDesc = styled.p`
	font-size: 1.8rem;
	color: var(--color-dark-gray);
	max-width: 60rem;
	line-height: 1.7;
	margin-bottom: 3rem;
`;

export const Content = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	max-width: 90rem;
	width: 92%;
`;

export const Info = styled.div`
	margin: 3rem auto 0 auto;
	max-width: 80rem;
`;
