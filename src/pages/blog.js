import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEOCONF from "../components/seo-conf"


export default function Blog({data}) {
	return (
		<Layout>
			<SEOCONF />
            <section className="container flex flex-row items-start flex-wrap w-10/12">
            {data.allStoryblokEntry.edges.map(({ node }, index) => (
              <div className="w-1/3 px-14 mb-8" key={index}>
                  <div className="p-8">
                    <h2 className="text-xl font-bold">{node.field_title_string}</h2>
                    <span className="inline-block text-xs mb-4">{node.field_date_string}</span>
                    <p>{node.field_excerpt_string}</p>
                  </div>
              </div>
            ))}
            </section>
		</Layout>
	)
};

export const query = graphql`
query {
    allStoryblokEntry {
        edges {
            node {
                id
                field_title_string
                field_excerpt_string
                field_date_string
                slug
            }
        }
    }
}
`