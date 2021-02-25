import React from "react"
import HomeWellcome from "../components/sections/home-wellcome";
import Layout from "../components/layout/layout";
import SEOCONF from "../components/seo-conf";
import HeroText from "../components/sections/hero-text";


export default function App() {
	return (
		<Layout>
			<SEOCONF />
			<HomeWellcome />
            <HeroText />
		</Layout>
	)
};