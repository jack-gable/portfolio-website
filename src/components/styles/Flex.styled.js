import styled from "styled-components";

export const Flex = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	& > div,
	& > ul {
		flex: 1;
	}
`;
