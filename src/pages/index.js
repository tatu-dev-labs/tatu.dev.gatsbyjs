import React from "react"
import HomeWellcome from "../components/sections/home-wellcome";
import Layout from "../components/layout/layout";
import SEOCONF from "../components/seo-conf";


export default function App() {
	return (
		<Layout>
			<SEOCONF />
			<HomeWellcome />
		</Layout>
	)
};