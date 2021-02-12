import React from "react"
import HomeWellcome from "../components/sections/home-wellcome";
import HomeUX from "../components/sections/home-ux";
import HomeFrontEnd from "../components/sections/home-frontend";
import HomeSeo from "../components/sections/home-seo";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";


export default function App() {
	return (
		<Layout>
			<SEO />
			<HomeWellcome />
			<HomeUX />
			<HomeFrontEnd />
			<HomeSeo />
		</Layout>
	)
};