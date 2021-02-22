import React from "react"
import Layout from "../components/layout/layout";
import SEOCONF from "../components/seo-conf";
import FrontEndIntro from "../components/sections/frontend-intro";


export default function FrontEnd() {
	return (
		<Layout>
			<SEOCONF />
            <FrontEndIntro></FrontEndIntro>
		</Layout>
	)
};