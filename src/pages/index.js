import React from "react"
import HomeWellcome from "../components/sections/home-wellcome";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";


export default function App() {
	return (
		<Layout>
			<SEO />
			<HomeWellcome />
		</Layout>
	)
};