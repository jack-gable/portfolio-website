import React from "react";
import { Info, Content, Cta, Section } from "./styles/Hero.styled";
import { PrimaryText, PrimaryHeading } from "./styles/Text.styled";
import { StyledButton } from "./styles/Button.styled";

export default function Hero() {
	return (
		<Section>
			<Content>
				<Info>
					<PrimaryText>
						Hi, my name's <PrimaryHeading>Jack Gable</PrimaryHeading> I am a
						passionate frontend developer based in the San Francisco Bay Area.
						My specialities are <strong>React JS</strong> and{" "}
						<strong>Styled Components</strong>, and I love building responsive
						user-friendly apps.
					</PrimaryText>
				</Info>

				<Cta>
					<StyledButton href="#projects" bg="lightblue" color="darkblue">
						Check Out My Projects
					</StyledButton>
				</Cta>
			</Content>
		</Section>
	);
}
