import React from "react";
import Navbar from "./Navbar";
import GlobalStyles from "./styles/Global";
import { StyledFooter } from "./styles/Footer.styled";

export default function Layout({ children }) {
	return (
		<div>
			<GlobalStyles />
			<Navbar />
			<div>{children}</div>
			<StyledFooter>
				<p>&copy; 2023 - Jack Gable</p>
			</StyledFooter>
		</div>
	);
}
