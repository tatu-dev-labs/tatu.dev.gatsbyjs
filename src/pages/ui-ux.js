import React from "react"
import Layout from "../components/layout/layout";
import SEOCONF from "../components/seo-conf";
import UIUXIntro from "../components/sections/ux-intro";


export default function UIUX() {
	return (
		<Layout>
			<SEOCONF />
            <UIUXIntro></UIUXIntro>
		</Layout>
	)
};