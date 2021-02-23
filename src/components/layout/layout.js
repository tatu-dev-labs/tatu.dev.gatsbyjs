import React from "react"
import Header from "../common/header"
import Footer from "../common/footer"


export default function Layout({ children }) {
	return (
	<div className="pa-layout">		
        <Header />        
		<main>
			{children}
		</main>
		<Footer />
	</div>
	)
}