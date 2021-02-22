import React from "react"
import Layout from "../components/layout/layout";
import SEOCONF from "../components/seo-conf";
import SeoIntro from "../components/sections/seo-intro";


export default function Seo() {
	return (
		<Layout>
			<SEOCONF />       
            <SeoIntro></SeoIntro>     
		</Layout>
	)
};