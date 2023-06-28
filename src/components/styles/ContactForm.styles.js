import styled from "styled-components";

export const StyledForm = styled.form`
	width: 60%;
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	gap: 1rem;
	color: var(--color-dark-gray);
	margin: 0 auto;
	padding-top: 12rem;
`;

export const StyledLabel = styled.label`
	font-size: 1.8rem;
	font-weight: 500;
	line-height: 35px;
`;

export const StyledInput = styled.input`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	font-size: 15px;
	box-shadow: 0 0 0 1px black;
	border: none;
	padding: 0 10px;
	height: 35px;
	line-height: 1;

	&:focus {
		border: 2px solid var(--color-light-blue);
	}
`;

export const StyledTextArea = styled.textarea`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	font-size: 15px;
	box-shadow: 0 0 0 1px black;
	border: none;
	resize: none;
	padding: 10px;
	margin-bottom: 10px;
`;

export const Title = styled.h2`
	font-size: 4rem;
	font-weight: 700;
	padding-bottom: 15px;
	text-transform: uppercase;
	color: var(--color-dark-blue);
`;

export const Section = styled.section`
	color: ${({ color }) => color || "var(--color-dark-gray)"};
	background-color: ${({ bg }) => bg || "var(--color-light-gray"};
	height: ${({ vh }) => vh || "100vh"};
	min-height: 76rem;
	position: relative;
`;
