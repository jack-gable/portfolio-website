import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";

export default function Home() {
	return (
		<Layout>
			<Hero />
			<About />
			<Projects />
		</Layout>
	);
}

export function Head() {
	return (
		<>
			<title>Jack Gable</title>
			<link rel="preconnect" href="https://fonts.googleapis.com"></link>
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossOrigin="true"
			></link>
			<link
				href="https://fonts.googleapis.com/css2?family=Raleway:wght@700;900&family=Source+Sans+3:wght@300;400;500;600;700;900&display=swap"
				rel="stylesheet"
			></link>
		</>
	);
}
