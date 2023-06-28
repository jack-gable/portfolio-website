import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
	StyledForm,
	StyledLabel,
	StyledInput,
	StyledTextArea,
	Title,
} from "./styles/ContactForm.styles";
import { Section } from "./styles/Hero.styled";
import { StyledButton } from "./styles/Button.styled";

export default function ContactForm() {
	const [state, handleSubmit] = useForm("mdorngwe");

	return (
		<Section vh="60vh">
			<StyledForm onSubmit={handleSubmit}>
				<Title>Contact Me</Title>
				<StyledLabel htmlFor="first-name">First Name *</StyledLabel>
				<StyledInput id="first-name" type="text" name="first-name" required />
				<ValidationError
					prefix="First-name"
					field="first-name"
					errors={state.errors}
				/>
				<StyledLabel htmlFor="last-name">Last Name *</StyledLabel>
				<StyledInput id="last-name" type="text" name="last-name" required />
				<ValidationError
					prefix="Last-name"
					field="last-name"
					errors={state.errors}
				/>
				<StyledLabel htmlFor="email">Email Address *</StyledLabel>
				<StyledInput id="email" type="email" name="email" required />
				<ValidationError prefix="Email" field="email" errors={state.errors} />
				<StyledLabel htmlFor="message">Message *</StyledLabel>
				<StyledTextArea id="message" name="message" required />
				<ValidationError
					prefix="Message"
					field="message"
					errors={state.errors}
				/>
				<StyledButton type="submit" disabled={state.submitting}>
					Send
				</StyledButton>
			</StyledForm>
		</Section>
	);
}
